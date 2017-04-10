module.exports.home = function(application, req, res){
	
	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	res.render('home',{logged:req.session.authorized, req:req})	

}

module.exports.logout = function(application, req, res){

	req.session.destroy( function(err){
		res.render('index', {logged : false});
	});

}

module.exports.addproduct = function(application, req, res){

	if(req.session.authorized !== true){
		res.send('Usuário precisa fazer login');
		return;
	}

	res.render('form_insert_product')

}
