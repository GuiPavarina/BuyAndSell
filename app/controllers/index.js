var Product = require('../models/product');

module.exports.index = function(application, req, res){
	res.render('index',{logged:req.session.authorized} );
}

module.exports.login = function(application, req, res){
	if(req.session.authorized){
		res.redirect('home')
	} else {
		res.render('login',{msg: {}});
	}
}

module.exports.singup = function(application, req, res){
	res.render('signup',{validation:{},logged:req.session.authorized});
}

module.exports.home = function(application, req, res){
	res.redirect('home')
}

module.exports.products = function(application, req, res){

	Product.find({},function(err, result) { 
		if(err){
			res.send('FAIL');
			return
		}

		res.render('products',{products : result,logged:req.session.authorized});
		
	}).sort({created: 'desc'}).limit(10);


}

