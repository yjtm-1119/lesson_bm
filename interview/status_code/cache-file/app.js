const http = require('http');
const fs = require('fs');
const users = require('./users.json');
// console.log(users);
let version = 1;
let server = http.createServer((req, res) => {
  // If-None-Match
  if (req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    fs.createReadStream('index.html').pipe(res);
  } else if (req.url == '/users') {
    res.setHeader('ETag', version);
    res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
    // send 文本  Buffer 
    // JSON 对象变成文本
    // console.log(typeof JSON.stringify(users));
    res.end(JSON.stringify(users)) // 怎么把JSON 传过去? 
  }
});

server.listen(3000);