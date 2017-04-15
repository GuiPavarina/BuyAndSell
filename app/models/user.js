var mongoose = require('mongoose');
mongoose.connect('mongodb://guipavarina:123456@ds021761.mlab.com:21761/heroku_6707t0cv');
//mongoose.connect('mongodb://localhost/db_buyandsell');

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
	}	
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
