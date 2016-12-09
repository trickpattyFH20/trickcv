
'use strict';

let express = require('express'),
    https = require('https'),
    http = require('http'),
    app = express(),
    path = require('path'),
    fs = require('fs')

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public/app')));
app.use(express.static(path.join(__dirname, 'public/static')));

let forscience = require('./csapi'),
    twilioVoice = require('./twilio')(app),
    gentest = require('./gentest');

app.use('/forscience', forscience);
app.use('/gentest', gentest);
app.use('/', express.static(__dirname + '/public/app/prod'));
app.use('/*', express.static(__dirname + '/public/app/prod'));

let pkey = fs.readFileSync('./private/key.pem'),
    pcert = fs.readFileSync('./private/cert.pem')

let options = {
    key: pkey,
    cert: pcert
};

http.createServer(app).listen(8080);
https.createServer(options, app).listen(443);
