var express=require ('express');
var fs=require ('fs');
var bodyParser=require('body-parser');

var app=express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.render('survey')
});

app.post('/results', function(req, res){
    res.render('results', {'name': req.body.name, 'location':req.body.location, 'language': req.body.language, 'comment': req.body.comment});
});

app.listen(8000, function () {
    console.log("listening on port 8000");
});
