需求：聊天APP

功能：查看聊天列表，实现单聊功能，实现群聊（选做个人中心，好友添加，群创建，登录、注册）







### 聊天列表

#### 1-创建一张用户user表

字段：username(,password,mail),headerimg,socketid,isonline



#### 1.5-在页面选择一个聊天角色





#### 2-设置前端内容

1）socket-client客户端与服务器的socket相连接，（选择当前的用户），并建立连接

2）向服务器发送一个获取用户列表的事件，socket.emit('getUserlist')，监听服务器返回的数据socket.on('getUserlist')



#### 3-设置后端的内容

1）服务器监听客户端的连接，获取当前连接的用户的用户名和socketid，更新数据库内容。

2）服务器监听获取用户列表事件socket.on('getUserlist',function(){   数据库的查询user表语句，将结果返回给到前端socket.emit('getUserlist') })