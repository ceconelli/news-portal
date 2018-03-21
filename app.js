// carrega configurações do servidor
var app = require('./config/server');

// var homeRoute = require('./app/routes/home')(app);
// var noticiasRoute = require('./app/routes/noticias')(app);
// var add_noticiaRoute = require('./app/routes/add_noticias')(app);



// app.get('/', home.home);

// app.get('/add_noticia',function(request,response){
// 	response.render("admin/form_add_noticia");
// });

// app.get('/noticias',function(request,response){
// 	response.render("noticias/noticias");
// });

// app.get('/noticia',function(request,response){
// 	response.render("noticias/noticia");
// });

app.listen(3000, function() {
	console.log('servidor rodando');
});