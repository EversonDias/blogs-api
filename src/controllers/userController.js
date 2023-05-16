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

const getAllUser = async (_req, res) => {
  const result = await useServices.getAllUser();
  res.status(result.type).json(result.message);
};

const getUserId = async (req, res) => {
  const { id } = req.params;
  const result = await useServices.getUserId(id);
  res.status(result.type).json(result.message);
};

const deleteUser = async (req, res) => {
  const { authorization } = req.headers;
  const result = await useServices.deleteUser(authorization);
  res.status(result.type).json(result.message);
};

module.exports = {
  handleLogin,
  createUser,
  getAllUser,
  getUserId,
  deleteUser,
};