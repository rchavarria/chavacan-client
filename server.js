var express = require('express');
var app = express();

// New call to compress content
app.use(express.compress());

app.use(express.static(__dirname + '/dist'));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});