const express = require('express');
const { newPost } = require('../../controllers/postController');
const { isToken } = require('../../middleware/validateToken');
const { hasValuesInKey, validateCategories } = require('../../middleware/validatePost');

const route = express.Router();

route.post('/', isToken, hasValuesInKey, validateCategories, newPost);

module.exports = route;