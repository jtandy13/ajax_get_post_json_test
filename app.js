var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function(req, res, next) {
  console.log('%s %s', req.method, req.url);
  next();
});

app.get('/Ajax', function (req, res) {
  res.send('Ajax response from the server!');
});

app.post('/Ajax', urlencodedParser, function (req, res) {
    res.send('Here is what you posted: ' + req.body.text);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});