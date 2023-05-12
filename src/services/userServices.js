const jtw = require('jsonwebtoken');
const { User } = require('../models');
const { Ok, BadRequest } = require('../utils/statusHTTP');

const handleLogin = async (email) => {
  const result = await User.findOne({ where: { email } });
  if (result !== null) {
    const token = jtw.sign(
      { email },
      process.env.JWT_SECRET,
      { algorithm: 'HS256', expiresIn: 10 },
    );
    return { type: Ok, message: { token } };
  }
  return { type: BadRequest, message: { message: 'Invalid fields' } };
};

module.exports = {
  handleLogin,
};