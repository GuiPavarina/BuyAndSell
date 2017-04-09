module.exports = function(application){
	application.post('/authenticate', function(req, res){
		application.app.controllers.login.authenticate(application,req,res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application,req,res);
	});

}