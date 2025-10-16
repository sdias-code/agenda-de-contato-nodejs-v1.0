require('dotenv').config();
const app = require('./src/app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB');
    app.emit('ready');
  })
  .catch(err => console.log('Erro MongoDB:', err));

app.on('ready', () => {
  app.listen(3000, () => console.log('🚀 Servidor rodando em http://localhost:3000'));
});