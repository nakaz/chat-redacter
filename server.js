var config = require('./config.json');
var express = require('express');
var app = express();
var jade = require('jade');
var bodyParser = require('body-parser');

var modules = require('./filter.js');

app.set('views', './');
app.set('view engine', 'jade');

app.set('title', 'Redacter');

app.use ('/', function(req, res, next){
  modules.log();
  next();
});

app.get('/', function(req, res){
  res.render('index', {title: 'hello!', message: 'what the hell?!'});
});

app.listen(config.port);