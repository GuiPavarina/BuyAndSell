/*
	UTILIZAR PARA DEPLOY NO HEROKU
*/
module.exports = function(application){
	application.post('/authenticate', function(req, res){
		application.controllers.login.authenticate(application,req,res);
	});

	application.get('/home', function(req, res){
		application.controllers.home.home(application,req,res);
	});

}


/*

Utilizar para testes locais



module.exports = function(application){
	application.post('/authenticate', function(req, res){
		application.app.controllers.login.authenticate(application,req,res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application,req,res);
	});

}
*/