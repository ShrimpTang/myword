var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/word');

var Word = mongoose.model('word', { word: String,translate:String });

exports.Word = Word;
//Word.find({word:'qq'}, function (err, docs) {
//    console.info(docs);
//})