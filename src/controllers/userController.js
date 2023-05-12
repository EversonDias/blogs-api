const { useServices } = require('../services');

const handleLogin = async (req, res) => {
  const user = req.body;
  const result = await useServices.handleLogin(user.email);
  res.status(result.type).json(result.message);
};

const createUser = async (req, res) => {
  const payload = req.body;
  const result = await useServices.createUser(payload);
  res.status(result.type).json(result.message);
};

module.exports = {
  handleLogin,
  createUser,
};