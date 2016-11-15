'use strict';

let express = require('express'),
    https = require('https'),
    http = require('http'),
    app = express(),
    path = require('path'),
    fs = require('fs')

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public/app')));

let forscience = require('./csapi'),
    twilioVoice = require('./twilio');

app.use('/forscience', forscience);
app.use('/voice', twilioVoice);
app.use('/', express.static(__dirname + '/public/app/prod'));
app.use('/*', express.static(__dirname + '/public/app/prod'));

//app.listen(8080, function() { console.log('listening'); });

let pkey = fs.readFileSync('key.pem'),
    pcert = fs.readFileSync('cert.pem')

let options = {
    key: pkey,
    cert: pcert
};

http.createServer(app).listen(8080);
https.createServer(options, app).listen(443);
