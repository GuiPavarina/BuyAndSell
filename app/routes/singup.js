module.exports = function(application){
	application.post('/register', function(req, res){
		application.app.controllers.singup.register(application,req,res);
	});

}