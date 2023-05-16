const express = require('express');
const { isLoginValidade } = require('../../middleware/validateLogin');
const { userController } = require('../../controllers');

const route = express.Router();

route.post('/', isLoginValidade, userController.handleLogin);

module.exports = route;