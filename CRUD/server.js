const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const port = 3000;
const session =  require('express-session');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));



app.use(express.static('view'));
app.use(express.static('public/css'));
app.use(session({
    secret: 'CRUD',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false,
        maxAge: 60000 
      }

}));
const routes = require('./config/routes');

app.use('/', routes);



app.listen(port, ()=> {
    console.log(`Servidor rodando em http://localhost:${port}`);
});