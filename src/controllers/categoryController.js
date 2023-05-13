const { categoryServices } = require('../services');

const createCategory = async (req, res) => {
  const newCategory = req.body;
  const result = await categoryServices.createCategory(newCategory);
  res.status(result.type).json(result.message);
};

const getAllCategory = async (_req, res) => {
  const result = await categoryServices.getAllCategory();
  res.status(result.type).json(result.message);
};

module.exports = {
  createCategory,
  getAllCategory,
};