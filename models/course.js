var mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    name:String,
    auther: {type:mongoose.Schema.Types.ObjectId, ref:'Author'}
    // Author referans alınacak ve oradaki Id buarada tutulmuş olacak
});

module.exports = mongoose.model('Course', courseSchema);