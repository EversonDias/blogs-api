const { BadRequest } = require('../utils/statusHTTP');

const isLoginValidade = (req, res, next) => {
  const login = req.body;
  const regex = /^[A-Za-z0-9.-]+@([A-Za-z0-9.-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(login.email) || login.password.length < 6) {
    return res.status(BadRequest).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  isLoginValidade,
};