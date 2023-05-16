const { BlogPost, PostCategory, User, Category } = require('../models');
const { status, JTW } = require('../utils');

const validateCategories = async () => {
  const result = await Category.findAll();
  const data = result.map(({ dataValues: { id } }) => id);
  return data;
};

const newPost = async ({ token, post: { title, content, categoryIds } }) => {
  try {
      const hasCategory = await validateCategories();
      if (hasCategory.map((data) => !categoryIds.includes(data)).includes(true)) {
        return { type: status.BadRequest,
          message: { message: 'one or more "categoryIds" not found' } };
      }
      const { data: { id } } = JTW.decoded(token);
      const payloadOfPost = { title, content, userId: id };
      const { dataValues } = await BlogPost.create(payloadOfPost);
      categoryIds.forEach(async (data) => {
        await PostCategory.create({ postId: dataValues.id, categoryId: data });
      });
      const resultOfBlog = await BlogPost
        .findOne({ where: { id: dataValues.id } });
      return { type: status.Created, message: resultOfBlog };
    } catch (Error) {
      return { type: status.BadRequest, message: Error };
    }
};

const getAllPost = async () => {
  try {
    const result = await BlogPost
      .findAll({
        include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }] });
    return { type: status.Ok, message: result };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

const getPostId = async (id) => {
  try {
    const result = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }],
    });
    if (result === null) {
      return { type: status.NotFound, message: { message: 'Post does not exist' } };
    }
    return { type: status.Ok, message: result };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

module.exports = {
  newPost,
  getAllPost,
  getPostId,
};