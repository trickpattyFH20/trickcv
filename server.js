var express = require('express');
var app = express();
var path = require('path');
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public')));

var forscience = require('./csapi');

app.use('/forscience', forscience);
app.use('/', express.static(__dirname + '/public'));
app.use('/*', express.static(__dirname + '/public'));

app.listen(8080, function() { console.log('listening'); });
