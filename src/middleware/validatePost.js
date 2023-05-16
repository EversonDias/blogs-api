const { status } = require('../utils');
const { Category } = require('../models');

const hasValuesInKey = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (title === '' || content === '' || categoryIds.length < 1) {
    return res.status(status.BadRequest).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  categoryIds.forEach(async (category) => {
    const result = await Category
      .findOne({ where: { id: category } });
    if (result === null) {
      return res.status(status.BadRequest).json({
        message: 'one or more "categoryIds" not found',
      });
    }
  });
  next();
};

module.exports = {
  hasValuesInKey,
  validateCategories,
};