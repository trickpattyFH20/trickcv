var express = require('express');
var app = express();
var path = require('path');
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/', express.static(__dirname + '/public'));
app.listen(8080, function() { console.log('listening'); });
