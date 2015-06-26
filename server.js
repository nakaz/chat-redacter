var config = require('./config.json');
var express = require('express');
var app = express();
var jade = require('jade');
var bodyParser = require('body-parser');

app.set('views', './');
app.set('view engine', 'jade');

app.set('title', 'Redacter');

app.get('/', function(req, res){
  res.render('index', {title: 'hello!', message: 'what the hell?!'});
});

app.listen(config.port);