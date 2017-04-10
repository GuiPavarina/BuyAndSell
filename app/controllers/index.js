var Product = require('../models/product');

module.exports.index = function(application, req, res){
	res.render('index',{logged:req.session.authorized} );
}

module.exports.login = function(application, req, res){
	if(req.session.authorized){
		res.render('home',{logged:{}, req: req})
	} else {
		res.render('login');
	}
}

module.exports.singup = function(application, req, res){
	res.render('singup',{validation:{},logged:req.session.authorized});
}

module.exports.home = function(application, req, res){
	res.render('home',{logged:{}, req: req});
}

module.exports.products = function(application, req, res){

	var product = new Product({
		  name: "Geladeira"
	});

	Product.find(function(err, result){
		if(err){
			res.send('FAIL');
			return
		}

		res.render('products',{products : result,logged:req.session.authorized});
	})


}

