var mongoose = require('mongoose');

//Product Schema
var ProductSchema = mongoose.Schema({
 		name: String,
 		username: String,
 		price: Number,
 		description : String,
 		category: String,
 		created: { 
 			type: Date, 
 			default: Date.now 
 		},
 		soldAt: {
 			type : Date
 		},
 		comments : [],
 		status: { 
 			type: String, 
 			uppercase: true,
    		enum: ['SOLD', 'SALE'] 
    	}
 	});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;