var express = require('express');
var app = express();
var path = require('path');
var models = require('./models');
var http = require('http');
var bodyParser = require('body-parser');
var listHandler = require('./server/listHandler');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/list', listHandler.addToList);
app.get('/list', listHandler.retrieveList);

var PORT = process.env.PORT || 8080;

var server = http.createServer(app);

models.sequelize.sync().then(function () {
  server.listen(PORT);
});


console.log("Server listening on port ", PORT);
