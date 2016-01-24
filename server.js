var express = require('express');
var app = express(); 
var PORT = process.env.PORT || 3000; 

app.use('/', function(req,res){
	res.send('Hellow API')
})

app.listen(PORT, function(){
	console.log('you are listening to PORT ' + PORT)
})