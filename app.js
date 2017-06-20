var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
	});
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});

http.listen(4500, function(){
	console.log('listening on *:4500');
});
