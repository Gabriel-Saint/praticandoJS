const express = require('express');
const router = express.Router();
const path = require('path');

const caminhoAbsoluto = path.resolve(__dirname, '../../view/cadastrar.html');

//função para exibir o form de cadastro
function exibirFormulario(req, res){
        res.sendFile(caminhoAbsoluto);
}


module.exports = {
    exibirFormulario: exibirFormulario
};
