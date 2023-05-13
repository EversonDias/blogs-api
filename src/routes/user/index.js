const express = require('express');
const { createUser, getAllUser, getUserId } = require('../../controllers/userController');
const { hasDisplayName, hasPassword, hasEmail } = require('../../middleware/validateUser');
const { isToken } = require('../../middleware/validateToken');

const route = express.Router();

route.post('/', hasDisplayName, hasPassword, hasEmail, createUser);

route.get('/', isToken, getAllUser);

route.get('/:id', isToken, getUserId);

module.exports = route;