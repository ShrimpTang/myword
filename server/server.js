var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path');;

var staticFile =path.resolve(__dirname,'../client/src');

app.use(require('cors')())

app.use(express.static(staticFile));

app.get('/word',function (req,res) {
    res.status(200).json(words);
});

server.listen('9988', function () {
    console.log('running part 9988')
});

var words = [
    {
        word:'restrict',
        translate:'限制'
    },
    {
        word:'contrib',
        translate:'普通'
    },
    {
        word:'separator',
        translate:'分隔符'
    }
];
