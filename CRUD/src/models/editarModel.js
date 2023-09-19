const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt = require('bcrypt');

const caminhoAbsolutoEditar = path.resolve(__dirname, '../../view/editar.ejs');


function listarPorId(req, res) {
    try {
        const id = req.body.id;
        const sql = `SELECT id, nome, email, senha_hash FROM usuarios WHERE id = ?`

        db.all(sql, [id], (erro, rows) => {
            if (erro) {
                console.error('Erro ao fazer consulta: ', erro);
                res.status(500).send('Erro ao editar usuários');
            } else {
                const dados = rows[0];
                res.render(caminhoAbsolutoEditar, { dados });

            }
        })


    } catch (erro) {
        console.error('Erro ao fazer consulta: ', erro);
        res.status(500).send('Erro ao editar usuários');
    }
}

function atualizarCadastro(req, res) {
    const id = req.body.id;
    const novoNome = req.body.novoNome;
    const novoEmail = req.body.novoEmail;
    const novaSenha = req.body.novaSenha;

    const sql = `UPDATE usuarios SET nome = ?, email = ?, senha_hash = ? WHERE id = ?`;
    bcrypt.hash(novaSenha, 10).then((hash) => {
        db.run(sql, [novoNome, novoEmail, hash, id], (erro) => {
            if (erro) {
                console.error('Erro ao Atualizar dados no banco de dados', erro);
                res.status(500).send('Erro ao Atualizar Banco de dados!');
            } else {
                //res.redirect('/sucesso');
                console.log('Cadastro Atualizado com sucesso com sucesso');
                res.send(`Olá seu novo nome é ${novoNome}, e seu novo email é ${id}!`);

            }
        })
    }).catch((erro) => {
        console.error("erro ao gerar hash da senha:", erro);
        res.status(500).send('erro ao atualizar usuario');
    })

}

function deletarCadastro(req, res) {
    const id =req.body.id;
    
    const sql = `DELETE FROM usuarios WHERE id = ?`;
    try {
        db.run(sql, [id], (erro) => {
            if (erro) {
                console.error('Erro ao Apagar dados no banco de dados', erro);
                res.status(500).send('Erro ao Apagar Banco de dados!');
            } else {
                
                console.log('Cadastro deletado com sucesso com sucesso');
                res.send(`Seu cadastro foi apagado com sucesso!`);

            }
        })
        
    } catch (error) {
                console.error('Erro ao Atualizar dados no banco de dados', erro);
                res.status(500).send('Erro ao Atualizar Banco de dados!');
    }
    

}


module.exports = {
    listarPorId: listarPorId,
    atualizarCadastro: atualizarCadastro,
    deletarCadastro: deletarCadastro
};




/* const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../../config/database');
const bcrypt =  require('bcrypt');

const caminhoAbsolutoEditar = path.resolve(__dirname, '../../view/editar.ejs');


function listarPorId(req, res){
       const id = req.body.id;
       const sql = `SELECT id, nome, email, senha_hash FROM usuarios WHERE id = ?`

       db.all(sql,[id], (erro, rows) => {
            if(erro){
                console.error('Erro ao fazer consulta: ', erro);
            } else {
                const dados = rows[0];
                res.render(caminhoAbsolutoEditar, {dados});
               
            }
       })
        
        
        
       
}

function atualizarCadastro(req, res){
    const id = req.body.id;
    const novoNome = req.body.novoNome;
    const novoEmail = req.body.novoEmail;
    const novaSenha = req.body.novaSenha;

    const sql = `UPDATE usuarios SET nome = ?, email = ?, senha_hash = ? WHERE id = ?`;

    bcrypt.hash(novaSenha, 10, (erro, hash)=>{
        if(erro) {
                console.error("erro ao gerar hash da senha:", erro);
                res.status(500).send('erro ao atualizar usuario');

        }else{
                db.run(sql, [novoNome, novoEmail, hash, id], (erro)=>{
                        if(erro){
                                console.error('Erro ao Atualizar dados no banco de dados', erro);
                                res.status(500).send('Erro ao Atualizar Banco de dados!');
                        }else{
                                 //res.redirect('/sucesso');
                                console.log('Cadastro Atualizado com sucesso com sucesso');
                                res.send(`Olá seu novo nome é ${novoNome}, e seu novo email é ${id}!`);
        
                        }
                })
        }
})

}
module.exports = {
    listarPorId: listarPorId,
    atualizarCadastro: atualizarCadastro
};


*/
