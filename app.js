var express = require('express'),
bodyParser = require('body-parser'),
app = express();

app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');

var articlesArray = [];

//homepage
app.get('/', function(req, res){
  res.render('site/index'); 
});

//displays summary
app.get('/articles', function(req, res){
  res.render('articles/articles', {articles: articlesArray}); 
});

//gets a form to save to article
app.get('/articles/new', function(req, res){
  res.render('articles/new'); 
});

//find the article in an array
app.get('/articles/:id', function(req, res){
  	var index = articlesArray[req.params.id]
  	//console.log(articlesArray)
  	console.log(index)
	res.render('articles/show', {articles: index}); 
});

app.post('/articles', function(req, res){
	console.log(req.body.articles)
	articlesArray.push(req.body.articles);
	console.log(articlesArray)
	res.redirect('/articles/new')
})



//static page about the daily planet
app.get('/about', function(req, res){
  res.render('site/about'); 
});

//contact
app.get('/contact', function(req, res){
  res.render('site/contact'); 
});




app.listen(3000)