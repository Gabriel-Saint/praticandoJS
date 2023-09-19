const express =  require('express');
const router = express.Router();

const cadastroController = require('../src/controllers/cadastrarController');
const loginController = require('../src/controllers/loginController');

const loginModel = require('../src/models/loginModel')
const cadastrarModel = require('../src/models/cadastrarModel');
const editarModel = require('../src/models/editarModel');
const listarModel = require('../src/models/listarModel');

router.get('/', loginController.exibirLogin);

router.get('/login', loginController.exibirLogin);
router.post('/login', loginModel.fazerLogin);

router.get('/cadastro', cadastroController.exibirFormulario);
router.post('/cadastro', cadastrarModel.processarCadastro);

router.get('/usuarios', listarModel.listar);


router.post('/editarCadastro', editarModel.listarPorId);
router.post('/atualizarCadastro', editarModel.atualizarCadastro);
router.post('/excluir', editarModel.deletarCadastro);


module.exports = router;
