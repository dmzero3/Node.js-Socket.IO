var Server = require('socket.io');
//Socket.ioのインスタンス作成
var io = new Server();
//var io = require('socket.io')();

//クライアントから接続があったとき
io.sockets.on('connection', function(socket){
    //console.log('connected!!');

    socket.on('text', function(data){
        console.log(data);

        //サーバー側からメッセージを送信する    
        socket.broadcast.emit('text', data);
    });
});

io.listen('3000');