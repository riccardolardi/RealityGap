var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.sendFile(path.resolve('../index.html'));
});

app.use(express.static(path.resolve('.././')));

http.listen(80);