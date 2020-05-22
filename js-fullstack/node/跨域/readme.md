##  跨域
浏览器安全策略  针对前端  node请求的时候没有这个问题

一个源向另外一个源发出请求的时候  
同源：同协议(http/https) 同域名  同端口  XMLHttpRequest和Fetch API遵循同源策略
不同源：产生跨域请求
CORS:cross origin resources share


前后端分开部署  前端有自己的域名 

## 解决办法1 
No 'Access-Control-Allow-Origin' header is present on the requested resource.  访问控制允许源
所有在后端设置一下头

## http头
请求头
accept  请求时设置的头
响应头
Set-Cookie：
通用头
Content-Type:
- 设置前端请求的时候带给后端的内容编码类型
- 后端告诉前端返回资源的类型

- 简单请求      符合规定的都是简单请求
  跨域直接发出请求  

- 预检请求      超出规定的会发出预检请求
  以OPTION 发出预检请求 检测跨域
  再发出POST/api 真实请求
