// var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

    app.get('/noticias',function(request,response){
        

        // busca todos os elementos no db e envia para o ejs
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;
        noticiasModel.getNoticias(connection,function(error,result){
            // response.send(result);
            response.render("noticias/noticias",{noticias : result});
        });
    });
};