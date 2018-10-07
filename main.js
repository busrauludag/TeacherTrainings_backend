var express = require("express");
var mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://busra:b12345@ds245022.mlab.com:45022/teacherbase", (err) => {
	if (!err) {
		console.log("connected to db");
	}
})

app.listen(8080);