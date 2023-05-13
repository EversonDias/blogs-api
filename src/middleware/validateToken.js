const { JTW, status } = require('../utils');

const isToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
  if (authorization === '') {
    return res.status(status.Unauthorized).json({
        message: 'Token not found',
      });
  }
    JTW.verifyToken(authorization);
    next();
  } catch (error) {
    return res.status(status.Unauthorized).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  isToken,
};
