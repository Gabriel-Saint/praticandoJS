const express = require('express');
const router = express.Router();
const path = require('path');

const caminhoAbsoluto = path.resolve(__dirname, '../../view/home.ejs');

//função para exibir o form de cadastro
function exibirHome(req, res){

        res.render(caminhoAbsoluto, {user: req.session.user});
      
}


module.exports = {
    exibirHome: exibirHome
};
