'use strict';

let express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    caseGroups = [
        [
            {M: 2, arr: [1, 2, 3]},
            {M: 3, arr: [1, 2, 3, 4, 5]},
            {M: 2, arr: [1, 3, 5, 12]},
            {M: 4, arr: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]},
            {M: 2, arr: [1, 3, 3, 7]},
            {M: 4, arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']},
            {M: 1, arr: ['xyz', 'abc', 321, 'def', 678]},
            {M: 2, arr: ['1a', '2b', '3c', '4d', '5e']},
            {M: 3, arr: [1337, 8888, 8443, 3000, 8080, 8443, 5555]}
        ],
        [
            {M: 2, arr: [1337, 8888, 1234]},
            {M: 2, arr: ['1a', '2b', '3c', '4d', '5e']},
            {M: 2, arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']},
            {M: 1, arr: ['xyz', 'abc', 'def', 678]},
        ],
        [
            {M: 2, arr: [1, 3, 5, 12]},
            {M: 2, arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g']},
            {M: 3, arr: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]},
            {M: 2, arr: [1, 3, 3, 7]},
            {M: 4, arr: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']}
        ]
    ];

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.use(bodyParser.json());

router.get('/', function(req, res) {
    let rollCase = Math.floor(Math.random() * 3)
    let caseInfo = {
        caseNumber: rollCase,
        cases: caseGroups[0],
        // cases: caseGroups[rollCase]
    }
    res.json(caseInfo);
});

router.post('/', function(req, res) {

    let checks = '',
        caseNumber = req.body.caseNumber,
        answers = req.body.answers

    for(var i=0, len=answers.length; i < len; i++){

        if(answers[i] === null || answers[i] === 'undefined') {
            res.send('invalid');
            return;
        }

        if(
            (answers[i][0] === caseGroups[caseNumber][i]['arr'][caseGroups[caseNumber][i]['M']-1]) &&
            (answers[i][1] === caseGroups[caseNumber][i]['arr'][(parseInt(caseGroups[caseNumber][i]['arr'].length) - caseGroups[caseNumber][i]['M'])])
        ) {
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
