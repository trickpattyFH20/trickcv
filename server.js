var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var path = require('path');
var fs = require('fs');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public/app')));

var forscience = require('./csapi');

app.use('/forscience', forscience);
app.use('/', express.static(__dirname + '/public/app/prod'));
app.use('/*', express.static(__dirname + '/public/app/prod'));

//app.listen(8080, function() { console.log('listening'); });

var pkey = fs.readFileSync('key.pem');
var pcert = fs.readFileSync('cert.pem')

var options = {
    key: pkey,
    cert: pcert
};

http.createServer(app).listen(8080);
https.createServer(options, app).listen(443);
