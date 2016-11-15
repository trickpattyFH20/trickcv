var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var path = require('path');
var fs = require('fs');
var twilio = require('twilio');
var express = require('express');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/voice', function (req, res) {
    console.log(req.body);
    // Create TwiML response
    var twiml = new twilio.TwimlResponse();

    if(req.body.To) {
        twiml.dial({ }, function() {
            // wrap the phone number or client name in the appropriate TwiML verb
            // by checking if the number given has only digits and format symbols
            if (/^[\d\+\-\(\) ]+$/.test(req.body.To)) {
                console.log('1st condition');

                var numberDialer = function(dial) {
                    dial.number(req.body.To);
                };

                twiml.dial({callerId: '+18475011344' }, numberDialer);

            } else {

                console.log('2nd condition')
                this.client(req.body.To);
            }
        });
    } else {
        twiml.say("Thanks for calling!");
    }

    res.set('Content-Type', 'text/xml');
    res.send(twiml.toString());
});

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
