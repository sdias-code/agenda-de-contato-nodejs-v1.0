const Contact = require('../models/Contact');

exports.list = async (req, res) => {
  // Buscar e ordenar direto no banco: primeiro por 'nome' e depois por 'sobrenome'
  let contacts = await Contact.find({ createdBy: req.session.user._id }).sort({ nome: 1, sobrenome: 1 });
  
  contacts = contacts.map(c => ({
    ...c.toObject(),
    nome: c.nome || '',
    sobrenome: c.sobrenome || ''
  }));

  res.render('contacts', { contacts });
};

exports.form = (req, res) => {
  res.render('contactForm', { contact: {} });
};

exports.create = async (req, res) => {
  try {
    const contact = new Contact({ ...req.body, createdBy: req.session.user._id });
    await contact.save();
    req.flash('success', 'Contato cadastrado com sucesso.');
    res.redirect('/contacts');
  } catch {
    req.flash('error', 'Erro ao cadastrar contato.');
    res.redirect('/contacts/new');
  }
};

exports.editForm = async (req, res) => {
  try {
    const contact = await Contact.findOne({ _id: req.params.id, createdBy: req.session.user._id });
    if (!contact) {
      req.flash('error', 'Contato não encontrado.');
      return res.redirect('/contacts');
    }
    res.render('contactForm', { contact });
  } catch {
    req.flash('error', 'Erro ao carregar contato.');
    res.redirect('/contacts');
  }
};

exports.update = async (req, res) => {
  try {
    await Contact.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.session.user._id },
      req.body
    );
    req.flash('success', 'Contato atualizado com sucesso.');
    res.redirect('/contacts');
  } catch {
    req.flash('error', 'Erro ao atualizar contato.');
    res.redirect('/contacts');
  }
};

exports.remove = async (req, res) => {
  try {
    await Contact.findOneAndDelete({ _id: req.params.id, createdBy: req.session.user._id });
    req.flash('success', 'Contato excluído com sucesso.');
    res.redirect('/contacts');
  } catch {
    req.flash('error', 'Erro ao excluir contato.');
    res.redirect('/contacts');
  }
};
