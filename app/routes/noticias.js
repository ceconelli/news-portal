// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticias',function(request,response){
        

        // busca todos os elementos no db e envia para o ejs
        // var connection = app.config.dbConnection();
        // var noticiasModel = new app.app.models.noticiasModel(connection);
        // noticiasModel.getNoticias(function(error,result){
        //     // response.send(result);
        //     response.render("noticias/noticias",{noticias : result});
        // });
        app.app.controllers.noticias.noticias(app,request,response);
    });

    app.get('/noticia',function(request,response){
        // var connection = app.config.dbConnection();
        // var noticiasModel = new app.app.models.noticiasModel(connection);

        // noticiasModel.getNoticia(function(error,result){
        //     // response.send(result);
        //     response.render("noticias/noticia",{noticia : result});
        // });
        // connection.query('select * from noticias where id_noticia = 2',function(error,result){
        //     response.render('noticias/noticia',{ noticia:result });
        // });
        app.app.controllers.noticias.noticia(app,request,response);

    });
};