module.exports = function(application){
	application.get('/logout', function(req, res){
		application.app.controllers.home.logout(application,req,res);
	});
	
	application.get('/form_insert_product', function(req, res){
		application.app.controllers.home.form_insert_product(application,req,res);
	});

	application.post('/addproduct', function(req, res){
		application.app.controllers.home.addproduct(application,req,res);
	});

	application.get('/myproducts', function(req, res){
		application.app.controllers.home.myproducts(application,req,res);
	});

	application.get('/allproducts', function(req, res){
		application.app.controllers.home.allproducts(application,req,res);
	});
}