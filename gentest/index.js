'use strict';

let express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    cases = [
        {M: 2, arr: [1, 2, 3]},
	{M: 3, arr: [1, 2, 3, 4, 5]},
	{M: 2, arr: [1, 3, 5, 7]},
	{M: 4, arr: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]},
	{M: 2, arr: [1, 3, 3, 7]},
	{M: 2, arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g']}
    ];

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(bodyParser.json());

router.get('/', function(req, res) {

    res.json(cases);

});

router.post('/', function(req, res) {
    //console.log(req.body);
    let checks = '';
    for(var i=0, len=req.body.length; i < len; i++){

	if(req.body[i] === null || req.body[i] === 'undefined') {
	    res.send('invalid');
	    return;
	}

        if(
	    (req.body[i][0] === cases[i]['arr'][cases[i]['M']-1]) &&
	    (req.body[i][1] === cases[i]['arr'][(parseInt(cases[i]['arr'].length) - cases[i]['M'])])
	){
	    checks = checks + ' case ' + (parseInt(i)+1) + ' passed - ';
	} else {
	    checks = checks + ' case ' + (parseInt(i)+1) + ' failed - ';
	}
    }

    res.send(checks);

});

router.get('/sandbox', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

router.get('/answer', function(req, res) {
    res.sendFile(__dirname + '/answer.html');
});

module.exports = router;
