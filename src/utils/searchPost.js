const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const getPost = async (key, search) => {
  const result = await BlogPost.findAll({ where: { [key]: { [Op.substring]: search } },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' }] });
  return result;
};

const titleOrContent = async (search) => {
  if (search === undefined || search === '') {
    const result = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }] });
    return result;
  }
  const result = await getPost('title', search);
  console.log('busca titel', result);
  if (result.length < 1) {
    const resultContent = await getPost('content', search);
    return resultContent;
  }
  return result;
};

module.exports = {
  titleOrContent,
};