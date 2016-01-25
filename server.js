var express = require('express');
var app = express(); 
var PORT = process.env.PORT || 3000; 

var todos = [{
	id:1, 
	description: "cook dinner",
	completed: false
},{
	id:2, 
	description: "come milky",
	completed: false

},{
	id:3, 
	description: "feed the cat",
	completed: true

}]

app.get('/', function(req,res){
	res.send('Hellow API')
})
//GET todos

app.get('/todos', function(req, res){
	res.json(todos)
})

app.get('/todos/:id', function(req, res){
	var todoID = parseInt(req.params.id,10);
	var matched = false; 
	for(var i=0; i<todos.length; i++){
		if(todoID===todos[i].id){
			res.json(todos[i]);
			matched  = true; 
		}
	}
	if(!matched){
	    res.status(404).send(); 
	}

	// res.send('Asking for todo with id of: ' + req.params)
})

//GET todos:/id

app.listen(PORT, function(){
	console.log('you are listening to PORT ' + PORT)
})