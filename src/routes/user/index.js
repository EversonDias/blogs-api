const express = require('express');
const { createUser } = require('../../controllers/userController');
const { hasDisplayName, hasPassword, hasEmail } = require('../../middleware/validateUser');

const route = express.Router();

route.post('/', hasDisplayName, hasPassword, hasEmail, createUser);

module.exports = route;