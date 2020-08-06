const express = require('express');

const ClienteController = require('./controllers/ClienteController')

const routes = express.Router();

routes.post('/cadastro', ClienteController.cadastro);
routes.get('/clientes', ClienteController.index);

module.exports = routes;