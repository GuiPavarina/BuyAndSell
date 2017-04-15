var User = require('../models/user');

module.exports.register = function(application, req, res){

	req.assert('username', 'Username requires 6 to 20 characters').len(6, 20);
	req.assert('email','Your email is incorrect').isEmail();
	req.assert('password', 'Password requires 6 to 20 characters').len(6, 20);

	var errors = req.validationErrors();

	if(errors){
		res.render('signup',{validation: errors,logged:req.session.authorized });
		return;
	}

	var user = new User({
		  firstname: req.body.firstname,
		  username: req.body.username,
		  password: req.body.password ,
		  email : req.body.email,
		  lastname: req.body.lastname
	});
	
	user.save(function(err){
		if(err){
			res.send('FAIL');
			return
		}
	})

	res.redirect('login')
}