var express = require ('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',function(req,res){
	res.render('home')

})

app.get('/gallery',function(req,res){
	res.render('gallery')

})
app.get('/quiz',function(req,res){
	res.render('quiz')

})
app.get('*',function(req,res){
	res.send('<center><h1>PAGE NOT FOUND</h1></center>')

})

app.listen(5000,'0.0.0.0',function(){console.log(
	'stem server started !!')})

