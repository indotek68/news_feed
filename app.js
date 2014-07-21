var express = require('express'),
bodyParser = require('body-parser'),
app = express();

//homepage
app.get('/', function(req, res){
  res.send('Hello World'); 
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
  res.send('about page'); 
});

//contact
app.get('/contact', function(req, res){
  res.send('contact page'); 
});




app.listen(3000)