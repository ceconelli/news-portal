module.exports = function(app){
    app.get('/add_noticia',function(request,response){
	    response.render("admin/form_add_noticia",{validacao:false});
    });

    app.post('/noticias/salvar',function(request,response){
        var noticia = request.body; //recupera as informaçoes do formulario(tratado pelo body-parser)
        //a noticia é um json(body parser faz isso);
        //faz a validação dos dados
        request.assert('titulo','Titulo é obrigatorio').notEmpty();
        request.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        request.assert('autor','Autor é obrigatorio').notEmpty();
        request.assert('data_noticia','data é obrigatorio').notEmpty();
        request.assert('noticia','noticia é obrigatorio').notEmpty();

        var erros = request.validationErrors();
        if(erros){
            response.render("admin/form_add_noticia",{validacao:erros});
            // response.redirect('/add_noticia');
            return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasModel(connection);//usa o new pq noticiasModel é uma classe
        
        noticiasModel.salvarNoticia(noticia,function(error,result){
            // response.render("noticias/noticias",{noticias : result});
            response.redirect('/noticias');
        });
    });
};