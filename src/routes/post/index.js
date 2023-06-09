const express = require('express');
const { postController } = require('../../controllers');
const { isToken } = require('../../middleware/validateToken');
const { hasValuesInKey, hasValuesInKeyTitleAndContent } = require('../../middleware/validatePost');

const route = express.Router();

route.get('/search', isToken, postController.searchPost);
route.post('/', isToken, hasValuesInKey, postController.newPost);
route.get('/', isToken, postController.getAllPost);
route.get('/:id', isToken, postController.getPostId);
route.put('/:id', isToken, hasValuesInKeyTitleAndContent, postController.editPost);
route.delete('/:id', isToken, postController.deletePost);
module.exports = route;