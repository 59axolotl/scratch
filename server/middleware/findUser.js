const Creator = require('../models/creatorModel');

const auth = {
  findCreator: async (req, res, next) => {
    try {
      const creatorRecord = await Creator.findOne({ email: req.body.email });

      if (!creatorRecord) {
        return res
          .status(400)
          .json({
            message: "Invalid login attempt, check email and password. ",
          });
      }

      req.creatorRecord = creatorRecord;
      return next();
    } catch (err) {
      return next({
        log: `findCreator failed to find creator, ${err.message}.`,
        status: 500,
        message: { err: "Failed to get logged in creator." },
      });
    }
  },
};

module.exports = auth;
