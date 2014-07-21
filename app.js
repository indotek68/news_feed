var express = require('express'),
bodyParser = require('body-parser'),
app = express();


app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(3000)