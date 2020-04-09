let socketio = {}

function getSocket(server){
    socketio.io = require('socket.io')(server);

    let io = socketio.io;
    io.on('connection', function (socket) {
        //此处的socket是当前浏览器某个浏览器与服务器的连接对象
        //当新的用户连接进来时，向所有人广播此人的id
        io.sockets.emit('addUser',{
            id:socket.id,
            content:"新用户加入"
        })
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {

            console.log(socket.id)
            console.log(data);
            socket.emit('hello',{content:"学习前端"})

        });

        //向某个用户发送消息
        socket.on('sendUser',function(data){
            // data = {
            //     from:"发送者ID",
            //     to:"收到者ID",
            //     content:"xxxxxx"
            // }
            socket.to(data.to).emit('sendClient',data)
        })

        //加入房间事件
        socket.on('addRoom',function(data){
            console.log(data)
            let roomObj = socket.join(data.room)
            //console.log(roomObj)
        })
        //监听群聊事件，并且广播给所有人
        socket.on('sendMsgRoom',function(data){
            console.log(data)
            socket.emit('qunliao',data).to(data.room)
        })


    });



    let qq = io.of('/qq')
    qq.on("connection",function(){
        qq.emit('news',{content:"qq命名空间发送过来的内容"})
    })

    let wx = io.of('/wx')
    wx.on('connection',function(){
        wx.emit('news',{content:"wx命名空间发送过来的内容"})
    })

}



socketio.getSocket = getSocket;

module.exports = socketio
