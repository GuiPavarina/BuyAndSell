var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_buyandsell');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	products: []	
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
