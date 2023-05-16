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

module.exports = {
  newPost,
};