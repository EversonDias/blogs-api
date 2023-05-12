const { User } = require('../models');
const { status, JTW } = require('../utils');

const handleLogin = async (email) => {
  try {
    const result = await User.findOne({ where: { email } });
    if (result !== null) {
      const token = JTW.generateToken({ data: email });
      return { type: status.Ok, message: { token } };
    }
    return { type: status.BadRequest, message: { message: 'Invalid fields' } };
  } catch (error) {
    return { type: status.BadRequest, message: { message: error.message } };
  }
};

const createUser = async (payload) => {
  try {
    await User.create(payload);
    const token = JTW.generateToken({ data: payload.email });
    return { type: status.Created, message: { token } };
  } catch (error) {
    return { type: status.Conflict, message: { message: 'User already registered' } };
  }
};

module.exports = {
  handleLogin,
  createUser,
};