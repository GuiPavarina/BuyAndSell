/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* importar o módulo do express-session */
var expressSession = require('express-session');

/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar o middleware express-validator */
app.use(expressValidator());

/* configura o middleware express-session */
app.use(expressSession({
	secret: 'wejn2k143',
	resave: false,
	saveUninitialized: false  
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
/*
	para utilizar o server localmente com uso do nodemon ou node, deve-se retirar a tag
	de comentário esse módulo, e comentar o módulo abaixo.
	-->Verificar os arquivos de rotas ( ../app/routes/ ) <--
*/

/*
consign()
	.include('./app/routes')
	.then('./app/models')
	.then('./app/controllers')
	.into(app);
*/

/*
	----->modelo para uso no heroku
*/

consign({cwd: process.cwd()+"/app"})
	.include('./routes')
	.then('./models')
	.then('./controllers')
	.into(app);



/* exportar o objeto app */
module.exports = app;

