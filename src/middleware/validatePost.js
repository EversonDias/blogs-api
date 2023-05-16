const { status } = require('../utils');

const hasValuesInKey = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (title === '' || content === '' || categoryIds.length < 1) {
    return res.status(status.BadRequest).json({ message: 'Some required fields are missing' });
  }
  next();
};

const hasValuesInKeyTitleAndContent = (req, res, next) => {
  const { title, content } = req.body;
  if (title === '' || content === '') {
    return res.status(status.BadRequest).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  hasValuesInKey,
  hasValuesInKeyTitleAndContent,
};