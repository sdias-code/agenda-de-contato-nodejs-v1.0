# Agenda de Contatos

Uma aplicação web de agenda de contatos desenvolvida com Node.js, Express e MongoDB. Este projeto implementa um CRUD completo (Create, Read, Update, Delete) para gerenciamento de contatos, com sistema de autenticação de usuários e medidas de segurança.

## Autor: 
- Silvio Dias Ferreira

## Contato:
- silviodias.ms@gmail.com

## 📋 Funcionalidades

- Cadastro e autenticação de usuários
- Gerenciamento completo de contatos (CRUD)
- Campos disponíveis para cada contato:
  - Nome
  - Sobrenome
  - Telefone
  - Email
- Interface responsiva e amigável
- Proteção contra CSRF
- Segurança aprimorada com Helmet

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução
- **Express** - Framework web
- **MongoDB** - Banco de dados
- **EJS** - Template engine
- **bcryptjs** - Criptografia de senhas
- **csurf** - Proteção contra CSRF
- **helmet** - Segurança de cabeçalhos HTTP
- **Bootstrap** - Framework CSS

## 🚀 Instalação

1. Clone o repositório
```bash
git clone [url-do-seu-repositorio]
cd agenda_projeto_completo
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:
```env
MONGODB_URI=sua_uri_do_mongodb
SESSION_SECRET=sua_chave_secreta
```

4. Inicie o servidor
```bash
npm start
```

## 🔒 Segurança

O projeto implementa várias medidas de segurança:
- Senhas criptografadas com bcryptjs
- Proteção contra CSRF com csurf
- Headers seguros com helmet
- Sessões seguras com express-session

## 📱 Interface

- Design responsivo com Bootstrap
- Navegação intuitiva
- Feedback visual para ações do usuário
- Validação de formulários

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Por favor, sinta-se à vontade para verificar a página de issues ou enviar um pull request.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.