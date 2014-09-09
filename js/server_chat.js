var Server = require('socket.io');
var io = new Server();

//var io = require('socket.io')();

io.sockets.on('connection', function(socket){
    //console.log('connected!!');

    socket.on('text', function(data){
        console.log(data);

        socket.broadcast.emit('text', data);
    });
});

io.listen('3000');