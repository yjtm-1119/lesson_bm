// 源端口号  目的地端口号
// 客户端:http.get  xhr 
const net = require('net'); 
class Xmlhttprequest {
  constructor() {
    this.method = null;
    this.url = null;
    this.body = null;
    this.headers = null;
  }
  open(method,url) {
    this.method = method;
    this.url = url;
  }
  setHeader(headers) {
    this.headers = headers;
  }
  send(body) {
    // 浏览器发 http请求  -> 第一步 拼报文  
    this.body = body;
    const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => { 
      
    })
  }
}
// ajax
const xhr = new Xmlhttprequest();
xhr.open("POST", "/");
xhr.setHeader({
  'Content-Type':'application/json'
})
xhr.send(JSON.stringify({ a: 1 }));
const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
  let json = JSON.stringify({ a: 1 });
  client.write('POST / HTTP/1.1\r\n');
  client.write('HOST: 127.0.0.1\r\n');
  client.write('Content-Type:application/json\r\n');
  client.write('\r\n');
  client.write(json)
  client.write('\r\n');
})
client.on('data', (data) => {
  console.log('receive:',data.toString());
})
client.on('end', () => {
  console.log('disconnect');
})