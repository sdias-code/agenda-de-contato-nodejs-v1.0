const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.loginPage = (req, res) => res.render('login');
exports.registerPage = (req, res) => res.render('register');

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      req.flash('error', 'Usuário já existe.');
      return res.redirect('/register');
    }

    const user = new User({ email, password });
    await user.save();

    req.flash('success', 'Usuário cadastrado com sucesso.');
    res.redirect('/login');
  } catch {
    req.flash('error', 'Erro ao cadastrar usuário.');
    res.redirect('/register');
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      req.flash('error', 'Credenciais inválidas.');
      return res.redirect('/login');
    }

    req.session.user = user;
    req.flash('success', 'Login realizado com sucesso.');
    res.redirect('/');
  } catch {
    req.flash('error', 'Erro ao realizar login.');
    res.redirect('/login');
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};