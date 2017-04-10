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

		// Get a timestamp in seconds
	var timestamp = Math.floor(new Date().getTime()/1000);
	// Create a date with the timestamp
	var timestampDate = new Date(timestamp*1000);

	// Create a new ObjectID with a specific timestamp
	var objectId = new ObjectID(timestamp);

	var username = req.session.username;
	
	console.log(objectId)

	User.update({ username: username },{ "$push": { products: objectId } },function(err){
		if(err){
			res.send('FAIL');
			return;
		}
	})

	var product = new Product({
		_id : objectId,
		name : req.body.name,
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

	res.render('home',{logged:req.session.authorized, req:req, msg : msg})	
}
