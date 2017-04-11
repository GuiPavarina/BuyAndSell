var User = require('../models/user');
var Product = require('../models/product');
var ObjectID = require('mongodb').ObjectID;

module.exports.home = function(application, req, res){
	
	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	res.render('home',{logged:req.session.authorized, req:req, msg :{}})	

}

module.exports.logout = function(application, req, res){

	req.session.destroy( function(err){
		res.render('index', {logged : false});
	});

}

module.exports.form_insert_product = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	res.render('form_insert_product')

}

module.exports.addproduct = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var product = new Product({
		_id : objectId,
		name : req.body.name,
		username : req.session.username,
		price: req.body.value,
 		description : req.body.description
	});
	
	product.save(function(err){
		if(err){
			res.send('FAIL P');
			return;
		}
	})

	var msg = "Produto inserido com sucesso"

	res.render('home',{logged:req.session.authorized, req:req , msg : msg})	
}

module.exports.myproducts = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var username = req.session.username;

	Product.find({username : username},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		res.render('myproducts',{products : result})
	})
	

}