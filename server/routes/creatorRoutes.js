const express = require('express');
const app = express();

const creatorController = require('../controllers/creatorControllers');
const auth = require('../middleware/findUser');

module.exports = function (app) {
    // CREATOR / USER ROUTE HANDLERS
    // TODO: Discuss functionality/need for route 
    // app.get('/api/creators');

    // POST request to create new user and add data into mongoose
    // DONE
    app.post('/api/creators/register', creatorController.register, (req, res) => {
      return res.sendStatus(200);
    });

    // POST request to authenticate user 
    app.post('/api/creators/login', auth.findCreator, creatorController.validateAndLogin, (req, res) => {
      return res.status(200).json(res.locals.responseData);
    });

    // // POST request to log out the user and clear the cookie associated with the user
    app.post('/api/creators/logout', creatorController.logout, (req, res) => {
        return res.status(201).json(res.locals.logoutMessage);
    });
};