var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
	text: String,
	username: String,
	created: { type: Date, default: Date.now }
})

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;