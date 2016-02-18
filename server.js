var express = require('express');
var app = express();
var path = require('path');
// var listHandler = require('/public/listHandler');

app.use(express.static(__dirname + '/public'));

// app.post('/list', listHandler.addToList);
// app.get('/list', listHandler.retrieveList);

var PORT = process.env.PORT || 8080;
var server = app.listen(PORT);

console.log("Server listening on port ", PORT);
