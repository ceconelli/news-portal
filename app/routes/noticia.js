module.exports = function(app){
    app.get('/noticia',function(request,response){
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection,function(error,result){
            // response.send(result);
            response.render("noticias/noticia",{noticia : result});
        });
        // connection.query('select * from noticias where id_noticia = 2',function(error,result){
        //     response.render('noticias/noticia',{ noticia:result });
        // });

    });
};  