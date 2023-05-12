const jwt = require('jsonwebtoken');

const generateToken = (payload) => {
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: 10 },
  );
  return token;
};

module.exports = {
  generateToken,
};