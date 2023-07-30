const express = require('express');
const app = express();

const User = require('./controllers/user.controllers');

module.exports = function (app) {
    // CREATOR / USER ROUTE HANDLERS
    // TODO: Discuss functionality/need for route app.get('/api/creators');

    // GET request to create new user and add data into mongoose
    app.post('/api/creators/register', User.register, (req, res) => {
        return res.status(200).json(res.locals.register);
    });

    // POST request to authenticate user 
    app.post('/api/creator/login', User.login, (req, res) => {
        return res.status(200).json({});
    });

    // POST request to log out the user and clear the cookie associated with the user
    app.post('/api/creators/logout', User.logout, (req, res) => {
        return res.status(201).json(res.locals.logoutMessage);
    });
};