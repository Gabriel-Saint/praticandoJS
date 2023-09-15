const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');


const caminhoAbsoluto = path.resolve(__dirname, '../../view/login.html');
function exibirLogin(req, res){
    res.sendFile(caminhoAbsoluto);
}
//função para processar o cadastro
function fazerLogin(req, res){
    

    const email = req.body.email;
    const senha = req.body.senha;

    // sql

    const pegaHashBD = 'SELECT senha_hash FROM usuarios WHERE email = ?';
    db.all(pegaHashBD, [email], (erro, rows)=>{
        if(erro){
                console.error('Erro ao fazer login', erro);
                res.status(500).send('Erro ao consultar usuário!');
        }else{
           
            if(rows === 0){
                res.send('nenhum usuario encontrado com o email fornecido');
            }else {
                const hashDoBD = rows[0].senha_hash;
                
                bcrypt.compare(senha, hashDoBD, (erro, resultado)=> {
                    if(resultado){
                        res.send('você esta logado bem vindo!');
                    } else{
                        res.send('senha incorreta!');
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
