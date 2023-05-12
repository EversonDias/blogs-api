const express = require('express');
const { isLoginValidade } = require('../../middleware/validateLogin');
const { handleLogin } = require('../../controllers/userController');

const route = express.Router();

route.post('/', isLoginValidade, handleLogin);

module.exports = route;