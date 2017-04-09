var mongoose = require('mongoose');

//Product Schema
var ProductSchema = mongoose.Schema({
 		name: String
 	});
 

/* 		_id: Number,
 		name: String,
 		username: {},
 		price: Number 
	}, { _id: false });
*/

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;