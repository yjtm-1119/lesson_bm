- koa 是node 的 web 开发框架
    7天 做一个blog 网站


    背后的基石是什么？
    koa  加速了node web 开发  一个web服务就是一个web  app
    koa 在3000端口上提供了http协议访问

    koa 在3000端口提供了http协议访问服务

    http://127.0.0.1:3000    图解HTTP

    http.createServer()
    http 是 node 内置模块   createServer  启动服务
    koa 封装了他们


    http  协议本质是干嘛的？
    ctx  context  上下文环境(request respond)
    http  协议  诞生于1991年  用于传输学术论文的
    采用基于请求(ctx.request)响应(ctx.response)的模式  在网络间传输HTML 
    超文本的内容 HTTP/0.9版本  1991年


- HTTP(web server应用程协议)基于TCP(tracnsport Control Protocol)协议

    TCP  用户 来自于移动或电信联通运营商 动态IP,    网站在 阿里云上
    应用层HTTP 
    TCP 三次握手
表示层
会话层
传输层  TCP 
网络层
数据链路层
物理层
- 建立连接后 会发送一个GET请求行(request method GET url/)的信息
GET /   template.html
- 服务器接收到请求信息后  读取对应的HTML文件 并将数据以ASCII码  返回给用户浏览器
- 断开连接
