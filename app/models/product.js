var mongoose = require('mongoose');

//Product Schema
var ProductSchema = mongoose.Schema({
 		name: String,
 		username: String,
 		price: Number,
 		description : String,
 		category: String,
 		created: { type: Date, default: Date.now }
 	});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;