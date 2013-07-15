#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());
app.get('/', function(req, res) {
	var buffer = fs.readFileSync('index.html');
	buffer.toString('utf-8');
	// res.send("Hello World 2!");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("listing to " + port);
});