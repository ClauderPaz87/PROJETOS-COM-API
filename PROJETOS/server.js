const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/IMC', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'IMC', 'index.html' ));
});

app.get('/CRUD', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'CRUD', 'index.html' ));
});

app.get('/LOGIN-REGISTER', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'LOGIN-REGISTER', 'index.html' ));
});


app.listen(3000)
 
// MUDAR LOCALIZÇÃO DO NODE : cd "Nome do Projeto"

