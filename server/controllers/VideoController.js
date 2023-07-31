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
  }
};

module.exports = videoController;
