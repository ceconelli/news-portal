module.exports.index = function(app,request,response){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasModel(connection);
    response.render("home/index");
}