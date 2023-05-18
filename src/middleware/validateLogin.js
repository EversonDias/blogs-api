const { BadRequest } = require('../utils/status');

const isLoginValidade = (req, res, next) => {
  const login = req.body;
  const regex = /^[A-Za-z]|[0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (!regex.test(login.email) || login.password.length < 6) {
    return res.status(BadRequest).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  isLoginValidade,
};