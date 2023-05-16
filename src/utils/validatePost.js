const { Category, BlogPost, User } = require('../models');
const status = require('./status');

const validateCategories = async () => {
  const result = await Category.findAll();
  const data = result.map(({ dataValues: { id } }) => id);
  return data;
};

const isUser = async (id, userId) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } }],
    });
    if (result === null) {
      return { result: true, type: status.NotFound, message: { message: 'Post does not exist' } };
    } if (result.user.id !== userId) {
      return { result: true, type: status.Unauthorized, message: { message: 'Unauthorized user' } };
    }
  return { result: false };
};

module.exports = {
  validateCategories,
  isUser,
};