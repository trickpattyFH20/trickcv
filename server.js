var express = require('express');
var app = express();
var path = require('path');
//app.use('/', express.static(__dirname + '/')); // ← adjust
app.use(express.static(path.join(__dirname, './')));
app.listen(8080, function() { console.log('listening'); });
