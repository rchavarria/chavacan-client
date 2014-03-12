var express = require('express');
var app = express();

// New call to compress content
app.use(express.compress());

app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 80);