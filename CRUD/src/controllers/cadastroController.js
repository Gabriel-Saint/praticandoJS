const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');

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
    exibirFormulario: exibirFormulario,
    processarCadastro: processarCadastro
};
