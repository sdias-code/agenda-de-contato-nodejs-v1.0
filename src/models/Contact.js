const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  telefone: String,
  email: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Contact', ContactSchema);