var express = require ('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(require('./auth'));
app.use('/api/posts',require('./controllers/api/posts'));
app.use('/api/sessions',require('./controllers/api/sessions'));
app.use('/api/users',require('./controllers/api/users'));
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/templates'));

//app.use('/',require('./controllers/static'));

app.get('/', function(req, res ){
	res.sendFile( __dirname + '/layouts/app.html');
}) 

app.listen(3000, function(){
	console.log ("Server listening at port 3000");
});