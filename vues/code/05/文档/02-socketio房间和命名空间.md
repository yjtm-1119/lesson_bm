# 命名空间

Socket.IO允许您“命名”套接字，这实际上意味着分配不同的*端点*或*路径*。

这是一项有用的功能，可通过在通信通道之间引入分隔来最大程度地减少资源（TCP连接）的数量，并同时在您的应用程序内分隔关注点。

## 默认名称空间

我们称之为默认名称空间`/`，它是默认连接的一个Socket.IO客户端，和默认情况下服务器监听的一个名称空间。

该名称空间由`io.sockets`或简单地标识`io`：

```
//以下两个将向连接到`/`的所有套接字发出
io.sockets.emit（'hi'，'everyone'）; 
io.emit（'hi'，'everyone'）; // 简写

```

每个名称空间都发出一个`connection`事件，该事件接收每个`Socket`实例作为参数

```
io.on（'connection'，function（socket） { 
  socket.on（'disconnect'，function（） {}）; 
}）;
```

## 自定义名称空间

要设置自定义名称空间，可以`of`在服务器端调用该函数：

```
const nsp = io.of('/my-namespace');
nsp.on('connection', function(socket){
  console.log('someone connected');
});
nsp.emit('hi', 'everyone!');
```

在客户端，您告诉Socket.IO客户端连接到该名称空间：

```
const socket = io（'/ my-namespace'）;
```



**重要说明：**名称空间是Socket.IO协议的实现细节，并且与基础传输的实际URL（默认为）无关`/socket.io/…`。

# 房间数

在每个名称空间内，您还可以定义套接字可以`join`和的任意通道`leave`。

## 加入和离开

您可以调用`join`以将套接字订阅到给定的频道：

```
io.on('connection', function(socket){
  socket.join('some room');
});
```

然后在广播或发射时简单地使用`to`或`in`（它们相同）：

```
io.to('some room').emit('some event');
```

要离开频道，您的呼叫方式`leave`与相同`join`。这两种方法都是异步的，并且接受`callback`参数。

## 默认房间

`Socket`Socket.IO中的每个对象都由一个随机的，不可猜测的唯一标识符标识`Socket#id`。为了您的方便，每个插座自动加入此ID标识的房间。

这使得将消息广播到其他套接字变得容易：

```
io.on('connection', function(socket){
  socket.on('say to someone', function(id, msg){
    socket.broadcast.to(id).emit('my message', msg);
  });
});
```

## 断开

断开连接后，会`leave`自动将其所属的所有通道插入插座，而无需您进行任何特殊拆卸。