/* 

UTILIZAR PARA DEPLOY NO HEROKU



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

	application.get('/product', function(req, res){
		application.controllers.home.product(application,req,res);
	});

	application.post('/comment', function(req, res){
		application.controllers.home.comment(application,req,res);
	});

	application.get('/buy', function(req, res){
		application.controllers.home.buy(application,req,res);
	});

	application.get('/recents', function(req, res){
		application.controllers.home.recents(application,req,res);
	});
}
*/

/*

Utilizar para testes locais

*/

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

	application.get('/update', function(req, res){
		application.app.controllers.home.update(application,req,res);
	});

	application.post('/update', function(req, res){
		application.app.controllers.home.updateTrue(application,req,res);
	});

	application.get('/delete', function(req, res){
		application.app.controllers.home.delete(application,req,res);
	});

	application.get('/product', function(req, res){
		application.app.controllers.home.product(application,req,res);
	});

	application.post('/comment', function(req, res){
		application.app.controllers.home.comment(application,req,res);
	});

	application.get('/buy', function(req, res){
		application.app.controllers.home.buy(application,req,res);
	});

	application.get('/recents', function(req, res){
		application.app.controllers.home.recents(application,req,res);
	});
}
