var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('../views/less');
});

app.get('/home', function(req, res){
    res.render('../views/home');
});

app.get('/dash', function(req, res){
    res.render('../views/dash');
});

app.listen(3001,function() {
    console.log('Executando na porta 3001');
});