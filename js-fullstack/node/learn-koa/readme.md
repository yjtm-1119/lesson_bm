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




- http  req+res可以完成一次请求？？
    - http协议 本质是基于请求应答模型   1991年  传输的是最简单的  html
    ctx.req ctx.res 
    a href
req 访问者浏览器访问   res 服务器返回数据
- writeHead 在做什么事情

- req,res是什么关系
    n:1的关系
    n很大的话  会怎么办？ 高并发  卡  
    node 天生支持高并发  js天生支持异步
    createServer  I/O  file  数据库
    php(同步  阻塞)  python
    Go  多核计算

    http协议 网络通信协议  tcp  7层
    流动  node 流
    建立一个通信管道(传输控制协议)  使用stream 
    GET / 请求行
    
    带宽  100mb/s
    req res 请求对象和返回对象
    请求头              响应头  writeHead
- head  在http是什么

- img不显示
  怎么办？
  1. img 是一个资源。  http协议  访问的能力
   src http接受的文件类型  未来还有css js  
  2. img src 向这个地址发送http 请求
  3. HTTP服务
