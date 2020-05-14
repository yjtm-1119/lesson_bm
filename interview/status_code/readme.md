# 计算机网络 HTTP

 - a  怎样点击它不 跳转？
 - 浏览器上输入  http://www.baidu.com http协议
    会发生什么？  状态码
    307 
    200
    https://www.baidu.com/ 跳转到 加密的http协议 https
    浏览器可以读懂状态码
    1. https://www.baidu.com
    res writeHead(307)  Location: https://www.baidu.com/
    redirect
    https://www.baidu.com/


    1XX  正在处理中
    2XX 成功
    3XX 跳转
    4XX 
    5XX 