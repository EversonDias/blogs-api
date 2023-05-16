const express = require('express');
const { userController } = require('../../controllers');
const { hasDisplayName, hasPassword, hasEmail } = require('../../middleware/validateUser');
const { isToken } = require('../../middleware/validateToken');

const route = express.Router();

route.post('/', hasDisplayName, hasPassword, hasEmail, userController.createUser);

route.get('/', isToken, userController.getAllUser);

route.get('/:id', isToken, userController.getUserId);

module.exports = route;