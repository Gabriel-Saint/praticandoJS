const express =  require('express');
const router = express.Router();
const cadastroController = require('../src/controllers/cadastroController');
const listarController = require('../src/controllers/listarController');
const loginController = require('../src/controllers/loginController');
const editarController = require('../src/controllers/editarController');

router.get('/cadastro', cadastroController.exibirFormulario);
router.post('/cadastrar', cadastroController.processarCadastro);

router.get('/listar', listarController.listar);

router.get('/login', loginController.exibirLogin);
router.post('/RealizarLogin', loginController.fazerLogin);

router.post('/editarCadastro', editarController.listarPorId);
router.post('/atualizarCadastro', editarController.atualizarCadastro);
module.exports = router;
