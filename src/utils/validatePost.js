const { Category, BlogPost, User } = require('../models');

const validateCategories = async () => {
  const result = await Category.findAll();
  const data = result.map(({ dataValues: { id } }) => id);
  return data;
};

const isUser = async (id) => {
  const result = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } }],
    });
  return result.user.id;
};

module.exports = {
  validateCategories,
  isUser,
};