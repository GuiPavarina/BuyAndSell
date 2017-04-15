module.exports = function(application){
	application.post('/register', function(req, res){
		application.controllers.signup.register(application,req,res);
	});

}