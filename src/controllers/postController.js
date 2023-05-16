const { postServices } = require('../services');

const newPost = async (req, res) => {
  const post = req.body;
  const { authorization } = req.headers;
  const payload = {
    post,
    token: authorization,
  };
  const result = await postServices.newPost(payload);
  res.status(result.type).json(result.message);
};

const getAllPost = async (req, res) => {
  const { authorization } = req.headers;
  const result = await postServices.getAllPost(authorization);
  res.status(result.type).json(result.message);
};

module.exports = {
  newPost,
  getAllPost,
};