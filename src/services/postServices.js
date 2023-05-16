const { BlogPost, PostCategory, User, Category } = require('../models');
const { status, JTW } = require('../utils');

const newPost = async ({ token, post: { title, content, categoryIds } }) => {
    try {
      const { data: { id } } = JTW.decoded(token);
      const payloadOfPost = { title, content, userId: id };
      const { dataValues } = await BlogPost.create(payloadOfPost);
      categoryIds.forEach(async (data) => {
        await PostCategory.create({ postId: dataValues.id, categoryId: data });
      });
      const resultOfBlog = await BlogPost
        .findOne({ where: { id: dataValues.id } });
      return { type: status.Created, message: resultOfBlog };
    } catch (error) {
      return { type: status.Created, message: error };
    }
};

const getAllPost = async (token) => {
  try {
    const { data: { id } } = JTW.decoded(token);
    const result = await BlogPost
      .findAll({
        where: { id },
        include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }] });
    return { type: status.Ok, message: result };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

module.exports = {
  newPost,
  getAllPost,
};