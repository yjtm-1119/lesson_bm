## req
浏览器  xhr fetch
node http.get()

发http请求
不同xxx ->  http  ->  一样

http: 超文本传输协议

http 报文 基于报文
```js
const xhr = new Xmlhttprequest();
xhr.setheader('COntent-Type':'application/json');
xhr.open('POST','api.com',true);
xhr.send({a:1,b:2})
```
浏览器做拼接报文的工作 
http1.1 报文:(纯文本)
- 请求行
- 首部
- \r\n
- 实体
