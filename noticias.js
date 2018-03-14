// nao usa express
var http = require('http');

var server = http.createServer(function(request,response){

	var categoria = request.url;
	if (categoria == '/tecnologia') {
		response.end('<h1>Show tecnologia</h1>');
	}

	else if (categoria == '/moda') {
		response.end('<h1>Show moda</h1>');
	}

	else if (categoria == '/beleza') {
		response.end('<h1>Show beleza</h1>');
	}

	else {
		response.end('<h1>Show</h1>');
	}

});

server.listen(3000);
