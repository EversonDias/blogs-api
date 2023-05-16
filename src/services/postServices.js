const { BlogPost, PostCategory, User, Category } = require('../models');
const { status, JTW, validatePost } = require('../utils');

const newPost = async ({ token, post: { title, content, categoryIds } }) => {
  try {
      const hasCategory = await validatePost.validateCategories();
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

const editPost = async (payload, id, token) => {
  try {
    const { data } = JTW.decoded(token);
    const userId = await validatePost.isUser(id);
    if (userId !== Number(data.id)) {
      return { type: status.Unauthorized, message: { message: 'Unauthorized user' } };
    }
    await BlogPost.update(payload, { where: { id } });
    const result = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' }],
    });
    return { type: status.Ok, message: result };
  } catch (error) {
    return { type: status.BadRequest, message: error };
  }
};

module.exports = {
  newPost,
  getAllPost,
  getPostId,
  editPost,
};