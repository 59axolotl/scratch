const User = require('../models/user.model');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

module.exports = {
  register: (req, res) => {
    console.log('in register');
    console.log(req.body);
    const user = new User(req.body);

    user
      .save()
      .then((newUser) => {
        console.log(newUser);
        console.log('Successfully registered.');
        res.json({
          successMessage: 'Thanks for registering.',
          user: newUser,
        });
      })
      .catch((err) => {
        console.log('Register unsuccessful');
        res.status(400).json(err);
      });
  },

  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((userRecord) => {
        if (userRecord === null) {
          res.status(400).json({ message: 'Invalid Login Attempt' });
        } else {
          bcrypt
            .compare(req.body.password, userRecord.password)
            .then((isPasswordValid) => {
              if (isPasswordValid) {
                console.log('password is valid');
                res
                  .cookie(
                    'usertoken',
                    jwt.sign(
                      {
                        //payload
                        id: userRecord._id,
                        email: userRecord.email,
                        username: userRecord.username,
                      },
                      process.env.JWT_SECRET
                    ),
                    {
                      httpOnly: true,
                      expires: new Date(Date.now() + 9000000),
                    }
                  )
                  .json({
                    message: 'Successfully logged in.',
                    userLoggedIn: userRecord.username,
                  });
                console.log('token is', req.cookies.usertoken);
                const decodedJWT = jwt.decode(req.cookies.usertoken, {
                  complete: true,
                });
                console.log('decoded', decodedJWT);
              } else {
                res.status(400).json({
                  message: 'Login and/or Email invalid.',
                });
              }
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({
                message: 'Login and/or email invalid',
              });
            });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          message: 'Login and/or email invalid.',
        });
      });
  },
  logout: (req, res) => {
    console.log('logging out');
    res.clearCookie('usertoken');
    res.json({
      message: 'You have successfully logged out',
    });
  },

  getLoggedInUser: (req, res) => {
    const decodedJWT = jwt.decode(req.cookies.usertoken, {
      complete: true,
    });
    User.findOne({ _id: decodedJWT.payload.id })
      .then((user) => {
        console.log(user);
        res.json(user);
      })
      .catch((err) => {
        console.log('error in getLoggedInUser', err);
      });
  },
};
