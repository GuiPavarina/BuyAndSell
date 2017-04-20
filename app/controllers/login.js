var User = require('../models/user');

module.exports.authenticate = function(application, req, res){

	User.findOne({username: req.body.username, password: req.body.password}, function(err, users) {		
		if(err){
			return err
		}
		if(users === null){
			var msg = "Incorrect username or password !!"
			res.render('login',{msg : msg})
			return
		}

		req.session.username = req.body.username
		req.session.authorized = true;

		res.redirect('home')

	});

}