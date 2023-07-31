const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Creator = require("../models/creatorModel");

const creatorController = {
  // REGISTER METHOD
  register: async (req, res, next) => {
    try {
      const creator = new Creator(req.body);
      const newCreator = await creator.save();

      res.locals.register = {
        successMessage: "Thanks for registering.",
        creator: newCreator,
      };

      return next();
    } catch (err) {
      console.log("Register unsuccessful");
      return next(err);
    }
  },

  validateAndLogin: async (req, res, next) => {
    try {
      // Bcrpyt compares creator password input against database record.
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        req.creatorRecord.password
      );

      // If creator enters wrong password, return error object to global error handler
      if (!isPasswordValid) {
        return next({
          log: "Invalid creator login attempt.",
          status: 401,
          message: { err: "Invalid login attempt." },
        });
      }

      // signs JWT token
      const token = jwt.sign(
        {
          id: req.creatorRecord._id, //maybe req.body.creatorRecord
          email: req.creatorRecord.email,
          creatorName: req.creatorRecord.username,
        },
        process.env.JWT_SECRET
      );

      // Adds cookie to creator browser with signed JWT token.
      res.cookie("usertoken", token, {
        httpOnly: true,
        domain: 'localhost',
        path: '/',
        expires: new Date(Date.now() + 9000000),
      });

      res.locals.responseData = {
        message: "Successfully logged in.",
        creatorLoggedIn: req.creatorRecord.username, //maybe req.body.creatorRecord
        studioName: req.creatorRecord.studio,
        creatorId: req.creatorRecord._id,
      };

      return next();
    } catch (err) {
      // catch to handle errors
      return next(err);
    }
  },

  logout: async (req, res, next) => {
    try {
      res.clearCookie("usertoken");
      res.locals.logoutMessage = {
        message: "You have successfully been logged out.",
      };

      return next();
    } catch (err) {
      return next(err);
    }
  },

  getLoggedInCreator: async (req, res, next) => {
    try {
      const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
      const creator = await Creator.findOne({ _id: decodedJWT.payload.id });
      res.locals.foundCreator = creator;

      return next();
    } catch (err) {
      return next({
        log: `creatorController failed to find creator, ${err.message}.`,
        status: 500,
        message: { err: "Failed to get logged in creator." },
      });
    }
  },
};

module.exports = creatorController;
