const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Trybe';
const option = { algorithm: 'HS256', expiresIn: '10m' };

const generateToken = (payload) => {
  const token = jwt.sign(
    payload,
    secret,
    option,
  );
  return token;
};

const verifyToken = (token) => {
  const isValidator = jwt.verify(token, secret);
  return isValidator;
};

const decoded = (token) => {
  const result = jwt.decode(token);
  return result;
};

module.exports = {
  generateToken,
  verifyToken,
  decoded,
};