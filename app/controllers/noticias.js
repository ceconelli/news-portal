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
    console.log(request.query);
    var id = request.query; //pega os parametros da url

    noticiasModel.getNoticia(id,function(error,result){
        // response.send(result);
        response.render("noticias/noticia",{noticia : result});
    });
}