var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(`Hello pingpoint is answering again! ${req.baseUrl}`);
});

app.listen(3000);
