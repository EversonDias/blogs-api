const express = require('express');
const { categoryController } = require('../../controllers');
const { isToken } = require('../../middleware/validateToken');
const { hasKeyName } = require('../../middleware/validateCategory');

const route = express.Router();

route.post('/', isToken, hasKeyName, categoryController.createCategory);
route.get('/', isToken, categoryController.getAllCategory);

module.exports = route;