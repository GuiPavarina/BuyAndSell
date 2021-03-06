var User = require('../models/user');
var Product = require('../models/product');
var Comment = require('../models/comment');
var ObjectID = require('mongodb').ObjectID;


module.exports.home = function(application, req, res){
	
	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var username = req.session.username;

	if(req.query.msg != ''){
		msg = req.query.msg;
	}

	User.find({username : username}, function(err, result){
		if(err){
			res.send('fail')
			return
		}

		res.render('home',{logged:req.session.authorized, req:req, msg : msg, result : result[0]})
	})	

}

module.exports.logout = function(application, req, res){

	req.session.destroy( function(err){
		res.render('index', {logged : false});
	});

}

module.exports.form_insert_product = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	res.render('form_insert_product')

}

module.exports.addproduct = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var product = new Product({
		name : req.body.name,
		username : req.session.username,
		price: req.body.value,
 		description : req.body.description,
 		category: req.body.category,
 		status : "SALE"
	});

	product.save(function(err){
		if(err){
			res.send('fail');
			return;
		}
	})

	User.update({username: req.session.username},{"$inc":{products: 1}},function(err,result){
		if(err){
			res.send('fail')
			return
		}
	})

	res.redirect('home?msg=inserted')	
}

module.exports.myproducts = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var username = req.session.username;

	Product.find({username : username, status : "SALE"},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		res.render('myproducts',{products : result})
	}).sort({created: 'desc'})
	

}

module.exports.allproducts = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	Product.find({status: "SALE"},function(err, result){
		if(err){
			res.send('fail')
			return
		}
		res.render('allproducts',{products : result})
	}).sort({created: 'desc'})
	
}

module.exports.update = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var id = req.query.id_product;
	var username = req.session.username

	Product.find({_id : id},function(err, product){
		if(err){
			res.send('fail')
			return
		}

		User.find({username : username}, function(err, result){
			if(err){
				res.send('fail')
				return
			}
			res.render('update',{product : product, result: result[0]})
		})
	})
	
}

module.exports.delete = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var id = req.query.id_product;

	Product.remove({ _id: id, username : req.session.username }, function(err) {
	    if (err) {
	    	res.send('fail')
	    }
  	});

  	User.update({username: req.session.username},{"$inc":{products: -1}},function(err,result){
		if(err){
			res.send('fail')
			return
		}
	})

	res.redirect('home?msg=removed')
}

module.exports.updateTrue = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var id = req.query.id_product;
	var form = req.body;

	Product.update({ _id: id, username : req.session.username },{ description : form.description, price: form.value },{multi : false},function(err, result){
		if(err){
			res.send('fail')
			return
		}

		res.redirect('home?msg=updated')

	})
	
}

module.exports.product = function(application, req, res){

	var id = req.query.id_product;

	Product.find({_id : id},function(err, result){
		if(err){
			res.send('fail')
			return
		}

		res.render('product',{logged: req.session.authorized, product : result})
	})
	
}

module.exports.comment = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var comment = new Comment({
		text: req.body.comment,
		commentname: req.session.username
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

module.exports.buy = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	var id = req.query.id_product;

	var buyer_money;

	User.find({username: req.session.username},function(err,result){
		if(err){
			res.send('fail')
			return
		}
		buyer_money = result[0].cash
	})

	Product.find({ _id : id,status : "SALE"},function(err,product){
		if(err){
			res.send('fail')
			return
		}
		if( product[0].username == req.session.username){
			res.send('You can not buy your own product')
			return
		}
		if(buyer_money < product[0].price){
			res.send('You dont have money')
			return
		}
		User.update({username: req.session.username},{"$inc":{cash: -(product[0].price)}},function(err){
			if(err){
				res.send('fail')
				return
			}
		})
		User.update({username: product[0].username},{"$inc":{products: -1, cash: product[0].price}},function(err){
			if(err){
				res.send('fail')
				return
			}
		})
		Product.update({_id: id},{"$set":{username:req.session.username, status: "SOLD", soldAt: new Date()}},function(err){
			if(err){
				res.send('fail')
				return
			}
		})

		res.redirect('home?msg=sold')
	})	
}

module.exports.recents = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('User must be logged in');
		return;
	}

	Product.find({username: req.session.username , status: "SOLD"},function(err,result){
		if(err){
				res.send('fail')
				return
			}
		res.render('recent_purchases',{products: result})
	}).sort({soldAt : "desc"})
}