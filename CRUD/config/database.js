const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('usuariosBD');
const path = require('path');

const dbPath = path.resolve(__dirname, '../usuariosBD.sqlite');// caminho absoluto com path

//console.log(dbPath);

// query 
const criarTabelaCliente = `
CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  senha_hash VARCHAR(64) NOT NULL
)
`;

db.run(criarTabelaCliente, (erro)=>{
    if(erro){
        console.error('erro ao criar tabela', erro );
    }else{
        console.log('tabela criada com sucesso!');
    }

})

//db.close();// encerra a conexão

module.exports = db;