/*
	UTILIZAR PARA DEPLOY NO HEROKU
*/
module.exports = function(application){
	application.post('/register', function(req, res){
		application.controllers.signup.register(application,req,res);
	});
}


/*
Utilizar para testes locais





module.exports = function(application){
	application.post('/register', function(req, res){
		application.app.controllers.signup.register(application,req,res);
	});

}

*/