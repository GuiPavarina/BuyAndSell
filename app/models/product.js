var mongoose = require('mongoose');
//mongoose.createConnection('mongodb://localhost/db_buyandsell');

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