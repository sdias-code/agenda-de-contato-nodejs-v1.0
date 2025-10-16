const express = require('express');
const route = express.Router();
const home = require('./controllers/homeController');
const user = require('./controllers/userController');
const contact = require('./controllers/contactController');
const { checkLogin } = require('./middlewares/checkLogin');

route.get('/', home.index);

// Usuário
route.get('/login', user.loginPage);
route.post('/login', user.login);
route.get('/register', user.registerPage);
route.post('/register', user.register);
route.get('/logout', user.logout);

// Contatos (CRUD completo)
route.get('/contacts', checkLogin, contact.list);
route.get('/contacts/new', checkLogin, contact.form);
route.post('/contacts/new', checkLogin, contact.create);
route.get('/contacts/edit/:id', checkLogin, contact.editForm);
route.post('/contacts/edit/:id', checkLogin, contact.update);
route.post('/contacts/delete/:id', checkLogin, contact.remove);

module.exports = route;
