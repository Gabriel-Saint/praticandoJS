const express = require('express');
const router = express.Router();
const path = require('path');


function encerrarSessao(req, res){
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro ao encerrar sessão:', err);
        } else {
           
            res.redirect('/login');
        }
    })
}


module.exports = {
    encerrarSessao: encerrarSessao
};
