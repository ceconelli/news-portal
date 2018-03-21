module.exports = function(app){
    app.get('/',function(request,response){
	// response.render("home/index");
        app.app.controllers.home.index(app,request,response);
    })
};
