module.exports = function(application){
	application.post('/register', function(req, res){
		application.controllers.singup.register(application,req,res);
	});

}