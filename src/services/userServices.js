const { User } = require('../models');
const { status, JTW } = require('../utils');

const handleLogin = async (email) => {
  try {
    const result = await User.findOne({ where: { email } });
    if (result !== null) {
      const { password: _pass, ...payloadWithoutPassword } = result.dataValues; 
      const token = JTW.generateToken({ data: payloadWithoutPassword });
      return { type: status.Ok, message: { token } };
    }
    return { type: status.BadRequest, message: { message: 'Invalid fields' } };
  } catch (error) {
    return { type: status.BadRequest, message: { message: `message auto${error.message}` } };
  }
};

const createUser = async (payload) => {
  try {
    const result = await User.create(payload);
    const { password: _pass, ...payloadWithoutPassword } = result.dataValues; 
    const token = JTW.generateToken({ data: payloadWithoutPassword });
    return { type: status.Created, message: { token, result } };
  } catch (error) {
    return { type: status.Conflict, message: { message: 'User already registered' } };
  }
};

const getAllUser = async () => {
  try {
    const result = await User.findAll({ attributes: { exclude: 'password' } });
    return { type: status.Ok, message: result };
  } catch (error) {
     return { type: status.BadRequest, message: error };
  }
};

const getUserId = async (id) => {
  try {
    const result = await User.findOne({ where: { id }, attributes: { exclude: 'password' } });
      if (result === null) {
        return { type: status.NotFound, message: { message: 'User does not exist' } }; 
      }
    return { type: status.Ok, message: result };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

const deleteUser = async (token) => {
  try {
    const { data: { id } } = JTW.decoded(token);
    await User.destroy({ where: { id } });
    return { type: status.NoContent };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

module.exports = {
  handleLogin,
  createUser,
  getAllUser,
  getUserId,
  deleteUser,
};