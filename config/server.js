// define as configurações do servidor e exporta para ser usado em app.js
var express = require('express');
var app = express();
app.set('view engine','ejs');
app.set('views','./app/views'); // configura novo diretorio padra para procura das views. A procura parte de onde esta o arquivo app.js
module.exports = app;