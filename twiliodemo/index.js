var router = require('express').Router();

router.post('/voice', function (req, res) {
   console.log('request:', req);
  // Create TwiML response
  var twiml = new twilio.TwimlResponse();
  
  if(req.body.To) {
    twiml.dial({ }, function() {
      // wrap the phone number or client name in the appropriate TwiML verb
      // by checking if the number given has only digits and format symbols
      if (/^[\d\+\-\(\) ]+$/.test(req.body.To)) {
        this.number(req.body.To);
      } else {
        this.client(req.body.To);
      }
    });
  } else {
    twiml.say("Thanks for calling!");
  }

  res.set('Content-Type', 'text/xml');
  res.send(twiml.toString());
});

module.exports = router;
