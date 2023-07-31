const Video = require("../models/videoModel");
const jwt = require("jsonwebtoken");

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
};

module.exports = videoController;
