// Express server on port 8080
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8080;
var fs = require('fs');

// Express server on port 8080
app.use(express.static(__dirname + '/public'));

// Express server on port 8080
http.listen(port, function(){
	console.log('listening on *:' + port);
});

// Socket.io
io.on('connection', function(socket){
	console.log('a user connected');
	
	// Listen for client to send message
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		
		// Broadcast message to all clients
		io.emit('chat message', msg);
	});
	
	// Listen for client to send message
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		
		// Broadcast message to all clients
		io.emit('chat message', msg);
	});
	
	// Listen for client to send message
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		
		// Broadcast message to all clients
		io.emit('chat message', msg);
	});
	
	// Listen for client to send message
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		
		// Broadcast message to all clients
		io.emit('chat message', msg);
	});
	
	// Listen for client to send message
	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		
		// Broadcast message to all clients
		io.emit('chat message', msg);
	})

    // Return the current time
    socket.on('get time', function(){
        var date = new Date();
        socket.emit('time', date.toString());
    });
});