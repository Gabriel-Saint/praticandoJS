const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');


function processarCadastro(req, res){
    

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    // sql
    const sql = 'INSERT INTO usuarios (nome, email, senha_hash) values (?, ?, ?)';
    // gerar uma hash com o bcrypt

    bcrypt.hash(senha, 10).then((hash)=>{
        db.run(sql, [nome, email, hash], (erro)=>{
            if(erro){
                    console.error('Erro ao inserir dados no banco de dados', erro);
                    res.status(500).send('Erro ao cadastrar usuário!');
            }else{
                     //res.redirect('/sucesso');
                    console.log('Cadastro realizado com sucesso');
                    res.send(`Olá ${nome}, seu cadastro foi realizado com suecesso e sua hash da senha é ${hash}!`);

            }
    })
    }).catch((erro)=>{
        console.error("erro ao gerar hash da senha:", erro);
        res.status(500).send('erro ao cadastar usuario');

    })
}

module.exports = {
    processarCadastro: processarCadastro
};

/*const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');


function processarCadastro(req, res){
    

    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;

    // sql
    const sql = 'INSERT INTO usuarios (nome, email, senha_hash) values (?, ?, ?)';
    // gerar uma hash com o bcrypt
   bcrypt.hash(senha, 10, (erro, hash)=>{
            if(erro) {
                    console.error("erro ao gerar hash da senha:", erro);
                    res.status(500).send('erro ao cadastar usuario');

            }else{
                    db.run(sql, [nome, email, hash], (erro)=>{
                            if(erro){
                                    console.error('Erro ao inserir dados no banco de dados', erro);
                                    res.status(500).send('Erro ao cadastrar usuário!');
                            }else{
                                     //res.redirect('/sucesso');
                                    console.log('Cadastro realizado com sucesso');
                                    res.send(`Olá ${nome}, seu cadastro foi realizado com suecesso e sua hash da senha é ${hash}!`);
            
                            }
                    })
            }
   })

}

module.exports = {
    processarCadastro: processarCadastro
};
*/