var express = require('express');
var app = express();
var port = 3000;
var host = "localhost";

app.get('/', function (req, res) {
    res.send('Hello pingpoint is answering on host ' + host + ':' + port);
});


app.listen(port);
