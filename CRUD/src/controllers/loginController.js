const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');


const caminhoAbsoluto = path.resolve(__dirname, '../../view/login.html');
const caminhoAbsolutoSucesso = path.resolve(__dirname, '../../view/sucesso.ejs');
function exibirLogin(req, res) {
    res.sendFile(caminhoAbsoluto);
}
//função para processar o cadastro
function fazerLogin(req, res) {


    const email = req.body.email;
    const senha = req.body.senha;


    // sql

    const pegaHashBD = 'SELECT id, senha_hash FROM usuarios WHERE email = ?';
    db.all(pegaHashBD, [email], (erro, rows) => {
        if (erro) {
            console.error('Erro ao fazer login', erro);
            res.status(500).send('Erro ao consultar usuário!');
        } else {
            if (rows.length === 0) {
                res.send('nenhum usuario encontrado com o email fornecido');
            } else {
                const hashDoBD = rows[0].senha_hash;
                const idDoBD = rows[0].id;
                bcrypt.compare(senha, hashDoBD, (erro, resultado) => {
                    if (resultado) {
                        res.render(caminhoAbsolutoSucesso, {idDoBD});
                    } else {
                        console.error('erro:', erro);
                        res.send('senha ou email incorreto!');
                    }
                })
            }
        }
    })

}

module.exports = {
    fazerLogin: fazerLogin,
    exibirLogin: exibirLogin
};
