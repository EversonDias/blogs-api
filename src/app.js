const express = require('express');
const routerLogin = require('./routes/login');
const routerUser = require('./routes/user');
const routerCategories = require('./routes/categories');
const routerPost = require('./routes/post');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', routerLogin);
app.use('/user', routerUser);
app.use('/categories', routerCategories);
app.use('/post', routerPost);

// ...
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
