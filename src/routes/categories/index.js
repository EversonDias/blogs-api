const express = require('express');
const { createCategory } = require('../../controllers/categoryController');
const { isToken } = require('../../middleware/validateToken');
const { hasKeyName } = require('../../middleware/validateCategory');

const route = express.Router();

route.post('/', isToken, hasKeyName, createCategory);

module.exports = route;