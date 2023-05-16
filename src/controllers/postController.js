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

const getAllPost = async (_req, res) => {
  const result = await postServices.getAllPost();
  res.status(result.type).json(result.message);
};

const getPostId = async (req, res) => {
  const { id } = req.params;
  const result = await postServices.getPostId(id);
  res.status(result.type).json(result.message);
};

module.exports = {
  newPost,
  getAllPost,
  getPostId,
};