const express = require('express');
const router = express.Router();
const path = require('path');


const caminhoAbsoluto = path.resolve(__dirname, '../../view/login.html');

function exibirLogin(req, res) {
    res.sendFile(caminhoAbsoluto);
}

module.exports = {
    exibirLogin: exibirLogin
};
