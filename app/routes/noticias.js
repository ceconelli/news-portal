var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticias',function(request,response){
        
        //importa o modulo do db
        // var mysql = require('mysql');
        // //se conecta ao db
        // var connection = mysql.createConnection({
        //     host : 'localhost',
        //     user : 'root',
        //     password : 'pretocriolao',
        //     database : 'portal_noticias'
        // });

        // busca todos os elementos no db e envia para o ejs
        var connection = dbConnection();
        connection.query('select * from noticias',function(error,result){
            // response.send(result);
            response.render("noticias/noticias",{
                noticias : result
            });
        });

    
	// response.render("noticias/noticias");
})};