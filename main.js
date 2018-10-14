var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var cors = require('cors');

var author = require('./services/authorService');
var user = require('./services/userService');

var app = express();

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb://busra:b12345@ds245022.mlab.com:45022/teacherbase",{ useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log("connected to db");
	}
})

app.use('/author', author.router);
app.use('/user', user.router);

app.listen(8080);

