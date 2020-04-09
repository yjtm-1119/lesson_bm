## 什么是Socket.IO

Socket.IO是一个库，可用于在浏览器和服务器之间进行实时，双向和基于事件的通信。它包括：

- 使Node.js服务器：[来源](https://github.com/socketio/socket.io) | [API](https://socket.io/docs/server-api/)
- 为浏览器（可从Node.js的也运行）一个JavaScript客户端库：[来源](https://github.com/socketio/socket.io-client) | [API](https://socket.io/docs/client-api/)

其主要特点是：

### 可靠性

即使存在以下情况，也会建立连接：

- 代理和负载平衡器。
- 个人防火墙和防病毒软件。

为此，它依赖于[Engine.IO](https://github.com/socketio/engine.io)，该[引擎](https://github.com/socketio/engine.io)首先建立长轮询连接，然后尝试升级到在侧面进行“测试”的更好传输，例如WebSocket。请参阅“ [目标”](https://github.com/socketio/engine.io#goals)部分以获取更多信息。

### 自动重新连接支持

除非另有指示，否则断开连接的客户端将尝试永久重新连接，直到服务器再次可用为止。请在[此处](https://socket.io/docs/client-api/#new-Manager-url-options)查看可用的重新连接选项。

### 断线检测

心跳机制在Engine.IO级别上实现，使服务器和客户端都可以知道对方何时不再响应。

通过在服务器和客户端上设置计时器，并在连接握手期间共享超时值（pingInterval和pingTimeout参数），可以实现该功能。这些计时器要求将任何后续客户端调用都定向到同一服务器，因此使用多个节点时需要执行粘性会话。

### 二进制支持

可以发出任何可序列化的数据结构，包括：

- 浏览器中的[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)和[Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- Node.js中的[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)和[Buffer](https://nodejs.org/api/buffer.html)

### 多路传输支持

为了在应用程序内创建关注点分离（例如，每个模块或基于权限），Socket.IO允许您创建多个[Namespaces](https://socket.io/docs/rooms-and-namespaces/#Namespaces)，它们将充当单独的通信通道，但将共享相同的基础连接。

### 客房支援

在每个[Namespace中](https://socket.io/docs/rooms-and-namespaces/#Namespaces)，您可以定义套接字可以加入和离开的任意通道，称为[Rooms](https://socket.io/docs/rooms-and-namespaces/#Rooms)。然后，您可以广播到任何给定的房间，到达已加入该房间的每个插槽。

这是有用的功能，用于向一组用户或连接到多个设备的给定用户发送通知。

这些功能附带一个简单便捷的API，如下所示：

```
io.on（'connection'，function（socket） { 
  socket.emit（'request'，/ * * /）; //向套接字发出事件
   io.emit（'broadcast'，/ * * /）; / /向所有连接的套接字发出事件
   socket.on（'reply'，function（） { / * * / }）; //监听事件
 }）;
```

## 什么不是Socket.IO

Socket.IO **不是** WebSocket实现。尽管Socket.IO确实确实在可能的情况下使用WebSocket作为传输工具，但它会向每个数据包添加一些元数据：当需要消息确认时，数据包类型，名称空间和数据包ID。这就是为什么WebSocket客户端将无法成功连接到Socket.IO服务器，而Socket.IO客户端也将无法连接到WebSocket服务器的原因。请在[此处](https://github.com/socketio/socket.io-protocol)查看协议规范。

```
//警告：客户端将无法连接！
const client = io（'ws：//echo.websocket.org'）;
```

## 正在安装

### 服务器

```
npm install --save socket.io
```

[资源](https://github.com/socketio/socket.io)

### Javascript客户端

默认情况下，服务器会公开客户端的独立版本`/socket.io/socket.io.js`。

也可以从CDN提供服务，例如[cdnjs](https://cdnjs.com/libraries/socket.io)。

若要从Node.js的使用就像一个捆绑使用，或[的WebPack](https://webpack.js.org/)或[browserify](http://browserify.org/)，您还可以安装NPM包：

```
npm install-save socket.io-client
```

[资源](https://github.com/socketio/socket.io-client)

### 其他客户端实施

有几种其他语言的客户端实现，由社区维护：

- Java：[https](https://github.com/socketio/socket.io-client-java)：[//github.com/socketio/socket.io-client-java](https://github.com/socketio/socket.io-client-java)
- C ++：[https](https://github.com/socketio/socket.io-client-cpp)：[//github.com/socketio/socket.io-client-cpp](https://github.com/socketio/socket.io-client-cpp)
- 斯威夫特：[https](https://github.com/socketio/socket.io-client-swift) : [//github.com/socketio/socket.io-client-swift](https://github.com/socketio/socket.io-client-swift)
- 飞镖：[https](https://github.com/rikulo/socket.io-client-dart)：[//github.com/rikulo/socket.io-client-dart](https://github.com/rikulo/socket.io-client-dart)
- Python：[https](https://github.com/miguelgrinberg/python-socketio)：[//github.com/miguelgrinberg/python-socketio](https://github.com/miguelgrinberg/python-socketio)
- .Net：[https](https://github.com/Quobject/SocketIoClientDotNet)：[//github.com/Quobject/SocketIoClientDotNet](https://github.com/Quobject/SocketIoClientDotNet)

## 与Node http服务器一起使用

### 服务器（app.js）

```
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});  
```

### 客户端（index.html）

```
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
```

## 与Express一起使用

### 服务器（app.js）

```
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
```

### 客户端（index.html）

```
<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
```

## 发送和接收事件

Socket.IO允许您发射和接收自定义事件。此外`connect`，`message`和`disconnect`，你可以发出自定义事件：

### 服务器

```
// note, io(<port>) will create a http server for you
var io = require('socket.io')(80);

io.on('connection', function (socket) {
  io.emit('this', { will: 'be received by everyone'});

  socket.on('private message', function (from, msg) {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', function () {
    io.emit('user disconnected');
  });
});
```

## 将自己限制为名称空间

如果您可以控制为特定应用程序发出的所有消息和事件，则可以使用默认值/命名空间。如果您想利用第三方代码或生成与他人共享的代码，socket.io提供了一种命名套接字的方式。

这具有`multiplexing`单个连接的优点。不是使用两个`WebSocket`连接，而是使用一个连接。

### 服务器（app.js）

```
var io = require('socket.io')(80);
var chat = io
  .of('/chat')
  .on('connection', function (socket) {
    socket.emit('a message', {
        that: 'only'
      , '/chat': 'will get'
    });
    chat.emit('a message', {
        everyone: 'in'
      , '/chat': 'will get'
    });
  });

var news = io
  .of('/news')
  .on('connection', function (socket) {
    socket.emit('item', { news: 'item' });
  });
```

### 客户端（index.html）

```
<script>
  var chat = io.connect('http://localhost/chat')
    , news = io.connect('http://localhost/news');
  
  chat.on('connect', function () {
    chat.emit('hi!');
  });
  
  news.on('news', function () {
    news.emit('woot');
  });
</script>
```

## 发送易失性消息

有时可能会丢弃某些消息。假设您有一个应用程序可显示关键字的实时推文`bieber`。

如果某个客户端尚未准备好接收消息（由于网络速度慢或其他问题，或者由于它们是通过长时间轮询连接的，并且处于请求-响应周期的中间），则它没有接收到所有推文与bieber相关，您的应用程序不会受到影响。

在这种情况下，您可能希望将这些消息作为易失性消息发送。

### 服务器

```
var io = require('socket.io')(80);

io.on('connection', function (socket) {
  var tweets = setInterval(function () {
    getBieberTweet(function (tweet) {
      socket.volatile.emit('bieber tweet', tweet);
    });
  }, 100);

  socket.on('disconnect', function () {
    clearInterval(tweets);
  });
});
```

## 发送和获取数据（确认）

有时，当客户端确认消息接收后，您可能希望获得回调。

为此，只需将函数作为`.send`或的最后一个参数传递即可`.emit`。而且，当您使用时`.emit`，确认是由您完成的，这意味着您还可以传递数据：

### 服务器（app.js）

```
var io = require('socket.io')(80);

io.on('connection', function (socket) {
  socket.on('ferret', function (name, word, fn) {
    fn(name + ' says ' + word);
  });
});
```

### 客户端（index.html）

```
<script>
  var socket = io(); // TIP: io() with no args does auto-discovery
  socket.on('connect', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!
    socket.emit('ferret', 'tobi', 'woot', function (data) { // args are sent in order to acknowledgement function
      console.log(data); // data will be 'tobi says woot'
    });
  });
</script>
```

## 广播消息

要广播，只需`broadcast`在`emit`和`send`方法调用中添加一个标志。广播意味着将消息发送到其他人（除了启动该消息的套接字之外）。

### 服务器

```
var io = require('socket.io')(80);

io.on('connection', function (socket) {
  socket.broadcast.emit('user connected');
});
```

## 像跨浏览器的WebSocket一样使用它

如果只需要WebSocket语义，也可以这样做。只需利用`send`并收听`message`事件：

### 服务器（app.js）

```
var io = require('socket.io')(80);

io.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('disconnect', function () { });
});
```

### 客户端（index.html）

```
<script>
  var socket = io('http://localhost/');
  socket.on('connect', function () {
    socket.send('hi');

    socket.on('message', function (msg) {
      // my msg
    });
  });
</script>
```

如果您不关心此类的重新连接逻辑，请查看[Engine.IO](https://github.com/socketio/engine.io)，这是Socket.IO使用的WebSocket语义传输层。