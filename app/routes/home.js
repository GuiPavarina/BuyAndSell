module.exports = function(application){
	application.get('/logout', function(req, res){
		application.app.controllers.home.logout(application,req,res);
	});
	
	application.get('/addproduct', function(req, res){
		application.app.controllers.home.addproduct(application,req,res);
	});
}