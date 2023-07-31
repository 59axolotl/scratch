const Video = require('../models/videoModel');
const jwt = require('jsonwebtoken');

const videoController = {
  
  createVideo: async (req, res, next) => {

    const newVideoObject = new Video(req.body);

    // //Keeping track of who created the listing: 
    const decodedJWT = jwt.decode(req.cookies.usertoken, {
      complete: true,
    });

    newVideoObject.createdBy = decodedJWT.payload.id;

    await newVideoObject
      .save()
      .then((newVideo) => {
            
        res.locals.newVideoContent = newVideo;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  },

  getCreatorUploads: async (req,res,next) => {

    try {
      const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
      const creatorUpVideos = await Video.find({ createdBy: decodedJWT.payload.id }).populate({path: 'createdBy', select: '_id studio '});
      res.locals.creatorUpVideos = creatorUpVideos;
  
      return next();
    } catch (err) {
      return next({
        log: `videoController failed to find videos for logged in creator, ${err.message}.`,
        status: 500,
        message: { err: "Failed to get logged in creator." },
      });
    }
  },

  // ALLVIDEOS METHOD
  // retrieves all videos in reverse chronological order 
  allVideos: async (req, res, next) => {
    try {
      const allVideos = await Video.find().sort({ createdAt: -1 });
      res.locals.videos = allVideos;
      return next();
    }
    catch(err) {
      return next({
        log: 'Failed to fetch all videos',
        status: 400,
        message: { err: 'Problem with allVideos.videoController: ' + err.message }
      });
    }
  },
  
  // // VIDEOBYID METHOD
  // videoById: async (req, res, next) => {
  //   try {
  //     const { id } = req.params.id;
  //     const singleVideo = await Video.findById(id);
  //     res.locals.videoById = singleVideo;
  //     return next(); 
  //   }
  //   catch(err) {
  //     return next({
  //       log: 'Failed to fetch video by ID',
  //       status: 400,
  //       message: { err: 'Problem with videoById.videoController: ' + err.message }
  //     });
  //   }
  // },

  // addVideoContent: async (req, res, next) => {
  //   try {
  //     const { title, description, image, videoLink, createdBy } = req.body;
  //     await Video.create({ title, description, image, videoLink, createdBy });
  //     return next();
  //   }
  //   catch(err) {
  //     return next({
  //       log: 'Failed to add new document in Video model',
  //       status: 400,
  //       message: { err: 'Problem with addVideoContent.videoController: ' + err.message }
  //     });
  //   }
  // },

  // // EDITVIDEOCONTENT METHOD
  // editVideoContent: async (req, res, next) => {
  //   try {
  //     const { id } = req.params.id;
  //     const { title, description, image, videoLink, createdBy } = req.body;
      
  //     const updates = {
  //       title,
  //       description,
  //       image,
  //       videoLink,
  //       createdBy
  //     };

  //     const updatedVideo = await Video.findByIdAndUpdate(id, updates, { new: true });
  //     res.locals.newVideoContent = updatedVideo;
  //     return next();
  //   }
  //   catch(err) {
  //     return next({
  //       log: 'Failed to edit document in Video model',
  //       status: 400,
  //       message: { err: 'Problem with editVideoContent.videoController: ' + err.message }
  //     });
  //   }
  // },

  // // EDITVIDEOCONTENT METHOD
  // deleteVideo: async (req, res, next) => {
  //   try {
  //     const { id } = req.body;
  //     const deletedVideo = await Video.findOneAndDelete({ _id: id });
  //     if (!deletedVideo) {
  //       return next({
  //         log: 'There is no video associated with that ID',
  //         status: 400,
  //         message: { err: 'Problem with deleteVideo.videoController: ' + err.message }
  //       });
  //     }
  //     return next();
  //   }
  //   catch(err) {
  //     return next({
  //       log: 'Failed to delete document in Video model',
  //       status: 400,
  //       message: { err: 'Problem with deleteVideo.videoController: ' + err.message }
  //     });
  //   }
  // },



};

module.exports = videoController;
