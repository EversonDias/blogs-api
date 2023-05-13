const { status } = require('../utils');

const hasKeyName = (req, res, next) => {
  const newCategory = req.body;
  if (!['name'].every((key) => key in newCategory)) {
    return res.status(status.BadRequest).json({ message: '"name" is required' });
  }
  next();
};

module.exports = {
  hasKeyName,
};