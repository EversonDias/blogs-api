const { status } = require('../utils');

const hasDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res
      .status(status.BadRequest)
      .json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const hasEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /^[A-Za-z0-9.-]+@([A-Za-z0-9.-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(email)) {
    return res
      .status(status.BadRequest)
      .json({
        message: '"email" must be a valid email',
      });
  }
  next();
};

const hasPassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res
      .status(status.BadRequest)
      .json({
        message: '"password" length must be at least 6 characters long',
      });
  }
  next();
};

module.exports = {
  hasDisplayName,
  hasEmail,
  hasPassword,
};