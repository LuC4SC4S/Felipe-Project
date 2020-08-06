const express = require('express');

const ClienteController = require('./controllers/ClienteController')

const routes = express.Router();

routes.post('/cadastro', ClienteController.cadastro);
routes.get('/clientes', ClienteController.index);
routes.delete('/clientes/:id', ClienteController.delete);

module.exports = routes;