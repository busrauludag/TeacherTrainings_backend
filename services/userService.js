var express = require("express");
var router = express.Router();

var User = require('../models/user');

router.post('/register', (request, response) => {
    var userData = request.body;
    var user = new User(userData);
    user.save((error, result) => {
        if(error){
            console.log("Error saving the user!");
        }
        response.sendStatus(201);  //created
    })
})

router.post('/login', async (request, response) => { // listeleme yapacağımız için yani insert işlemi olmadığı için async kullanıyoruz
    var userData = request.body;
    var user = await user.findOne({email:userData.email});
    if(!user){
        return response.status(401).send({message:'Email or password invalid!'}); // 401 = unauthorize
    }
    if(userData.password != user.password){
        return response.status(401).send({message:'Email or password invalid!'}); // 401 = unauthorize
    }

    return response.sendStatus(200);
})

// main js'te kullanabilmek için dışarı çıkartıyoruz
var user = {router};
module.exports = user;

