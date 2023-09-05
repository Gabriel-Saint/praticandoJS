const express = require('express');
const route = express.Router();
const homeController = require ('./controllers/homeControllers');

route.get('/', homeController.paginaInicial);
route.post('/', homeController.usandoPost)

module.exports = route