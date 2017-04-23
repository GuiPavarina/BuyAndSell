var User = require('../models/user');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreplybuyandsell@gmail.com',
        pass: 'buyandsell123'
    }
});

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

	var message = {
	    to: req.body.email,
	    subject: ' Thank you !!',
	    text: 'Welcome to Buy & Sell ' + req.body.firstname + '!'
	};
	
	user.save(function(err){
		if(err){
			res.send('FAIL');
			return
		}
	})

	transporter.sendMail(message, function(error, info){
	    if (error) {
	        console.log('Error occurred');
	        console.log(error.message);
	        return;
	    }
	    console.log('Message sent successfully to '+ req.body.email);
	    transporter.close();
	});

	res.render('login',{msg: {}})
}