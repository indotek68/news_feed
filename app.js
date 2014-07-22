var express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.set('view engine', 'ejs');

//homepage
app.get('/', function(req, res){
  res.render('site/index'); 
});

//displays summary
app.get('/articles', function(req, res){
  res.send('Summary'); 
});

//gets a form to save to article
app.get('/articles/new', function(req, res){
  res.send('save a new article'); 
});

//find the article in an array
app.get('/articles/:id', function(req, res){
  res.send('find article in array'); 
});

//static page about the daily planet
app.get('/about', function(req, res){
  res.render('site/about'); 
});

//contact
app.get('/contact', function(req, res){
  res.render('site/contact'); 
});




app.listen(3000)