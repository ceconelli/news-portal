// define as configurações do servidor e exporta para ser usado em app.js
var express = require('express');

var consign = require('consign');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views'); // configura novo diretorio padra para procura das views. A procura parte de onde esta o arquivo app.js
//configura o envio de informaçoes via post
app.use(bodyParser.urlencoded({extended:true}));

consign().include('app/routes').then('config/dbConnection.js').then('app/models').into(app); //deve ser declarado depois do app = express
module.exports = app;