'use strict';

let twilio = require('twilio'),
    bodyParser = require('body-parser')l

function twilioEndpoint(app){
    app.use(bodyParser.urlencoded({ extended: false }));

    app.post('/voice', (req, res) => {
        // Create TwiML response
        let twiml = new twilio.TwimlResponse();

        if(req.body.To) {
            twiml.dial({ }, () => {
                // wrap the phone number or client name in the appropriate TwiML verb
                // by checking if the number given has only digits and format symbols
                if (/^[\d\+\-\(\) ]+$/.test(req.body.To)) {

                    let numberDialer = dial => {
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
}

module.exports = twilioEndpoint;
