var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var path = require('path');
var fs = require('fs');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public')));

var forscience = require('./csapi');
var twiliodemo = require('./twiliodemo');

app.use('/forscience', forscience);
app.use('/voice', twiliodemo);
app.use('/', express.static(__dirname + '/public'));
app.use('/about', express.static(__dirname + '/public'));
app.use('/home', express.static(__dirname + '/public'));
app.use('/work', express.static(__dirname + '/public'));
//app.use('/node_modules', express.static(__dirname + '/node_modules'));
//app.listen(8080, function() { console.log('listening'); });

var pkey = fs.readFileSync('key.pem');
var pcert = fs.readFileSync('cert.pem')

var options = {
    key: pkey,
    cert: pcert
};

http.createServer(app).listen(8080);
https.createServer(options, app).listen(443);
