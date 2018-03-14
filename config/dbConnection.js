var mysql = require('mysql');
    
module.exports = function(){
    //se conecta ao db
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'pretocriolao',
        database : 'portal_noticias'

    });
};