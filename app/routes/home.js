module.exports = function(application){
	application.get('/logout', function(req, res){
		application.app.controllers.home.logout(application,req,res);
	});
}