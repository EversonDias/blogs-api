const express = require('express');
const { postController } = require('../../controllers');
const { isToken } = require('../../middleware/validateToken');
const { hasValuesInKey, hasValuesInKeyTitleAndContent } = require('../../middleware/validatePost');

const route = express.Router();

route.post('/', isToken, hasValuesInKey, postController.newPost);
route.get('/', isToken, postController.getAllPost);
route.get('/:id', isToken, postController.getPostId);
route.put('/:id', isToken, hasValuesInKeyTitleAndContent, postController.editPost);

module.exports = route;