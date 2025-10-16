// src/middlewares/csrfMiddleware.js
exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  const success = req.flash('success');
  const error = req.flash('error');

  // mantemos as variáveis individuais por compatibilidade
  res.locals.success = success;
  res.locals.error = error;

  // adicionamos o objeto messages usado no header (resolve o seu erro)
  res.locals.messages = { success, error };

  res.locals.user = req.session.user;
  next();
};
