const { JTW, status } = require('../utils');

const isToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization.length < 1) {
    return res.status(status.Unauthorized).json({
        message: 'Token not found',
      });
  } if (authorization.length < 158) {
    return res.status(status.Unauthorized).json({ message: 'Expired or invalid token' });
  }
    JTW.verifyToken(authorization);
    next();
};

module.exports = {
  isToken,
};
