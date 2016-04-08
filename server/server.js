var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    bodyParser = require('body-parser'),
    Word = require('./db').Word;
app.use(bodyParser.urlencoded({extended: true}));

var staticFile = path.resolve(__dirname, '../client/src');

app.use(require('cors')());
//app.use();
app.use(express.static(staticFile));

app.get('/word', function (req, res) {
    Word.find({}, function (err, docs) {
        res.status(200).send(docs);
    });
});

app.post('/word', function (req, res) {
    var word = new Word(req.body);
    word.save(function (err,w) {
        res.status(200).send(w);
    });

});

server.listen('9988', function () {
    console.log('running part 9988')
});

var words = [
    {
        word: 'restrict',
        translate: '限制'
    },
    {
        word: 'contrib',
        translate: '普通'
    },
    {
        word: 'separator',
        translate: '分隔符'
    }
];
