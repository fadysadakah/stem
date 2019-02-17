var express = require ('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',function(req,res){
	res.render('home')

})

app.listen(5000,'0.0.0.0',function(){console.log(
	'stem server started !!')})

