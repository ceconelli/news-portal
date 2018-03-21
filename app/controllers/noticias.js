module.exports.noticias = function(app,request,response){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    noticiasModel.getNoticias(function(error,result){
        // response.send(result);
        response.render("noticias/noticias",{noticias : result});
    });
}

module.exports.noticia = function(app,request,response){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);

    noticiasModel.getNoticia(function(error,result){
        // response.send(result);
        response.render("noticias/noticia",{noticia : result});
    });
}