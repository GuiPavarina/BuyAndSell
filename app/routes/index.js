/*
	UTILIZAR PARA DEPLOY NO HEROKU

module.exports = function(application){
	application.get('/', function(req, res){
		application.controllers.index.index(application,req,res);
	});

	application.get('/login', function(req, res){
		application.controllers.index.login(application,req,res);
	});

	application.get('/singup', function(req, res){
		application.controllers.index.singup(application,req,res);
	});

	application.get('/products', function(req, res){
		application.controllers.index.products(application,req,res);
	});
}
*/

/*

Utilizar para testes locais

*/

module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application,req,res);
	});

	application.get('/login', function(req, res){
		application.app.controllers.index.login(application,req,res);
	});

	application.get('/singup', function(req, res){
		application.app.controllers.index.singup(application,req,res);
	});

	application.get('/products', function(req, res){
		application.app.controllers.index.products(application,req,res);
	});
}