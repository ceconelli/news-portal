module.exports = function(app){
    app.get('/add_noticia',function(request,response){
	response.render("admin/form_add_noticia");
})};