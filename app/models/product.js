var mongoose = require('mongoose');

//Product Schema
var ProductSchema = mongoose.Schema({
		_id: {},
 		name: String,
 		username: String,
 		price: Number,
 		description : String
 	}, { _id: false });

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;