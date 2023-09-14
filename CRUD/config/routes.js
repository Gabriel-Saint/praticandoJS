const express =  require('express');
const router = express.Router();
const cadastroController = require('../src/controllers/cadastroController');

router.get('/cadastro', cadastroController.exibirFormulario);

router.post('/cadastrar', cadastroController.processarCadastro);

module.exports = router;
