const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');


const caminhoAbsolutoSucesso = path.resolve(__dirname, '../../view/sucesso.ejs');
const caminhoAbsolutoLogin = path.resolve(__dirname, '../../view/login.ejs');

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
            let mensagemErro ='';
            if (rows.length === 0) {
                mensagemErro ='Usuário não encontrado. Por favor, cadastre-se!';
                //res.send('nenhum usuario encontrado com o email fornecido');
                res.render(caminhoAbsolutoLogin, {mensagemErro})
            } else {
                const hashDoBD = rows[0].senha_hash;
                const idDoBD = rows[0].id;

                //agora usando promisse
                bcrypt.compare(senha, hashDoBD).then((resultado) => {
                    if (resultado) {
                        res.render(caminhoAbsolutoSucesso, { idDoBD });
                    } else {
                        mensagemErro ='senha ou email incorreto!'
                        res.render(caminhoAbsolutoLogin, {mensagemErro})
                    }
                }).catch((erroBcrypt) => {
                    console.error('Erro ao comparar hashes', erroBcrypt);
                    res.status(500).send('Erro ao verificar senha!');
                })
            }

        }

    })





}



module.exports = {
    fazerLogin: fazerLogin
};

/*bcrypt.compare(senha, hashDoBD, (erro, resultado) => {
                   if (resultado) {
                       res.render(caminhoAbsolutoSucesso, {idDoBD});
                   } else {
                       console.error('erro:', erro);
                       res.send('senha ou email incorreto!');
                   }
               })
               */

/* db.all(pegaHashBD, [email], (erro, rows) => {
        if (erro) {
            console.error('Erro ao fazer login', erro);
            res.status(500).send('Erro ao consultar usuário!');
        } else {
            if (rows.length === 0) {
                res.send('nenhum usuario encontrado com o email fornecido');
            } else {
                const hashDoBD = rows[0].senha_hash;
                const idDoBD = rows[0].id;
               
               //agora usando promisse
                bcrypt.compare(senha,hashDoBD).then((resultado)=>{
                    if (resultado) {
                        res.render(caminhoAbsolutoSucesso, {idDoBD});
                    }else {
                        res.send('senha ou email incorreto!');
                    }
                })
            }
        }
    })

}
*/