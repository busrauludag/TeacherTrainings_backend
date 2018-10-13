var express = require("express");
var router = express.Router();

var Author = require('../models/author');

// /author/add ya da "" ile /author
router.post('/add', (request,response) => {
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

// /author/list ya da "" ile /author url'i tanumlamış oluruz
router.get('', async(request,response) => {
	var authors = await Author.find({}, '-__v');
	response.send(authors);
})

var author = {router};
module.exports = author;