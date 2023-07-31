// const express = require('express');
// const app = express();
// const User = require('../controllers/user.controllers');

// module.exports = function (app) {
//     // VIDEO ROUTE HANDLERS
//     // GET request for the 6 most recent videos to render on home feed
//     app.get('/api/videos', (req, res) =>
//         res.status(200).json(res.locals.recentVideos)
//     );

//     // GET request for the selected video associated with a video ID
//     app.get('/api/videos/:id', (req, res) =>
//         res.status(200).json(res.locals.videoById)
//     );

//     // GET request for fetching the uploaded videos and info for a particular username
//     // THIS NEEDS USERCONTROLLER because it needs username
//     app.get('api/videos/:username', User.getLoggedInUser, (req, res) => {
//         return res.status(200).json(res.locals.userVideos);
//     });

//     // POST request to upload new video and poster image
//     // THIS NEEDS USERCONTROLLER because you need an account to upload
//     app.post('/api/videos', User.getLoggedInUser, (req, res) => {
//         return res.status(201).json(res.locals.newVideoContent);
//     });

//     // PATCH request to edit video upload contents
//     // THIS NEEDS USERCONTROLLER because you can only edit your own videos
//     app.patch('/api/videos/:id', User.getLoggedInUser, (req, res) => {
//         return res.status(201).json(res.locals.editVideoContent);
//     });

//     // DELETE request to remove video and contents from site
//     // THIS NEEDS USERCONTROLLER because users can only remove their own videos
//     app.delete('/api/videos/:id', User.getLoggedInUser, (req, res) => {
//         return res.status(204).send('Video has been deleted.');
//     });
// };