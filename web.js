#!/usr/bin/env node
var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(req, res) {
	res.send("Hello World!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("listing to " + port);
});