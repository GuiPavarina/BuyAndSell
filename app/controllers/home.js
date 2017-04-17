var User = require('../models/user');
var Product = require('../models/product');
var Comment = require('../models/comment');
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
		name : req.body.name,
		username : req.session.username,
		price: req.body.value,
 		description : req.body.description,
 		category: req.body.category
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
	}).sort({created: 'desc'})
	

}

module.exports.allproducts = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	Product.find({},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		res.render('allproducts',{products : result})
	}).sort({created: 'desc'})
	
}

module.exports.update = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var id = req.query.id_product;

	Product.find({_id : id},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		res.render('update',{product : result})
	})
	
}

module.exports.delete = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var id = req.query.id_product;

	Product.remove({ _id: id }, function(err) {
	    if (err) {
	    	res.send('fail')
	    }
  	});

	var msg = "Product successfully removed!"

  	res.render('home',{logged:req.session.authorized, req:req , msg : msg})	
}

module.exports.updateTrue = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var id = req.query.id_product;
	var form = req.body;

	Product.update({_id : id},{ description : form.description, price: form.value },{multi : false},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		var msg = "Product successfully updated!"

  		res.render('home',{logged:req.session.authorized, req:req , msg : msg})	
	})
	
}

module.exports.product = function(application, req, res){

	var id = req.query.id_product;

	Product.find({_id : id},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		console.log(result)
		res.render('product',{logged: req.session.authorized, product : result})
	})
	
}

module.exports.comment = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	var comment = new Comment({
		text: req.body.comment,
		username: req.session.username
	})

	var id = req.query.id_product;

	Product.update({_id: id},{$push:{comments: comment}},function(err){
		if(err){
			res.send('fail')
			return
		}
		res.redirect('/product?id_product='+id)
	})

}