var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var Author = require('./models/author');

var app = express();

app.use(bodyParser.json());

app.post('/author', (request,response) => {
	var authorData = request.body;
	var author = new Author(authorData);
	author.save((error,result) => {
		if(error){
			console.log(error);
			return response.status(500).send({message:error});
		}

		response.status(201);
	});
})

mongoose.connect("mongodb://busra:b12345@ds245022.mlab.com:45022/teacherbase", (err) => {
	if (!err) {
		console.log("connected to db");
	}
})

app.listen(8080);

