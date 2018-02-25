var express = require('express');
var app = express();

app.use('/store',function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});

var server = app.listen(3001, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:3001');
});
