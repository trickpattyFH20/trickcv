var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/')); // ← adjust
app.listen(8080, function() { console.log('listening'); });
