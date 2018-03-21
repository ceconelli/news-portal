module.exports = function(app){
    app.get('/add_noticia',function(request,response){
	    response.render("admin/form_add_noticia");
    });

    app.post('/noticias/salvar',function(request,response){
        var noticia = request.body; //recupera as informaçoes do formulario(tratado pelo body-parser)
        //a noticia é um json(body parser faz isso);

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.salvarNoticia(noticia,connection,function(error,result){
            // response.render("noticias/noticias",{noticias : result});
            response.redirect('/noticias');
        });
    });
};