var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
	text: String,
	username: String,
	created: { type: Date, default: Date.now }
})

//Product Schema
var ProductSchema = mongoose.Schema({
 		name: String,
 		username: String,
 		price: Number,
 		description : String,
 		category: String,
 		created: { type: Date, default: Date.now },
 		comments : [CommentSchema]
 	});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;