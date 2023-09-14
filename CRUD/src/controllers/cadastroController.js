const express = require('express');
const router = express.Router();
const path = require('path');

const caminhoAbsoluto = path.resolve(__dirname, '../../view/cadastrar.html');

//função para exibir o form de cadastro
function exibirFormulario(req, res){
        res.sendFile(caminhoAbsoluto);
}

//função para processar o cadastro
function processarCadastro(req, res){
    

        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
    
    
    
        //res.redirect('/sucesso'); ou
        res.send(` seu cadastro foi realizado com sucesso! ${nome}`);
    
    
}
module.exports = {
    exibirFormulario: exibirFormulario,
    processarCadastro: processarCadastro
};
