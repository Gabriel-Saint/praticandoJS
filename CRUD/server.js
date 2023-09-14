const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

const routes = require('./config/routes');

app.use(express.static('view'));

app.use('/', routes);

app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
});