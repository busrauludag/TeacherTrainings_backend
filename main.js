var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var author = require('./services/authorService');

var app = express();

app.use(bodyParser.json());


mongoose.connect("mongodb://busra:b12345@ds245022.mlab.com:45022/teacherbase", (err) => {
	if (!err) {
		console.log("connected to db");
	}
})

app.use('/author', author.router);

app.listen(8080);

