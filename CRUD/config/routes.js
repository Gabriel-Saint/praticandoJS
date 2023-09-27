const express =  require('express');
const router = express.Router();
const autenticacaoMiddleware =  require('../src/middlewares/authMiddleware');

const cadastroController = require('../src/controllers/cadastrarController');
const loginController = require('../src/controllers/loginController');
const homeController = require('../src/controllers/homeController');

const loginModel = require('../src/models/loginModel')
const cadastrarModel = require('../src/models/cadastrarModel');
const editarModel = require('../src/models/editarModel');
const listarModel = require('../src/models/listarModel');

const logoutController = require('../src/controllers/encerrarSessao');

router.get('/', loginController.exibirLogin);
router.get('/home', autenticacaoMiddleware, homeController.exibirHome);

router.get('/login', loginController.exibirLogin);
router.post('/login', loginModel.fazerLogin);

router.get('/cadastro', cadastroController.exibirFormulario);
router.post('/cadastro', cadastrarModel.processarCadastro);

router.get('/usuarios', autenticacaoMiddleware, listarModel.listar);

router.get('/logout', autenticacaoMiddleware, logoutController.encerrarSessao);


router.get('/verificar-sessao', (req, res) => {
    const user = req.session.user;
    res.send(user);
});

router.post('/editarCadastro',autenticacaoMiddleware, editarModel.listarPorId);
router.post('/atualizarCadastro',autenticacaoMiddleware, editarModel.atualizarCadastro);
router.post('/excluir',autenticacaoMiddleware, editarModel.deletarCadastro);


module.exports = router;
