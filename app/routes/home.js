module.exports = function(application){
	application.get('/logout', function(req, res){
		application.controllers.home.logout(application,req,res);
	});
	
	application.get('/form_insert_product', function(req, res){
		application.controllers.home.form_insert_product(application,req,res);
	});

	application.post('/addproduct', function(req, res){
		application.controllers.home.addproduct(application,req,res);
	});

	application.get('/myproducts', function(req, res){
		application.controllers.home.myproducts(application,req,res);
	});

	application.get('/allproducts', function(req, res){
		application.controllers.home.allproducts(application,req,res);
	});

	application.get('/update', function(req, res){
		application.controllers.home.update(application,req,res);
	});

	application.post('/update', function(req, res){
		application.controllers.home.updateTrue(application,req,res);
	});

	application.get('/delete', function(req, res){
		application.controllers.home.delete(application,req,res);
	});
}