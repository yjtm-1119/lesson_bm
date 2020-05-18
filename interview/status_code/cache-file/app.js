const http = require('http');
const fs = require('fs');
const users = require('./users.json');
const version = 4;
// const version = 5;  users.json 修改后, 版本号+1
let server = http.createServer((req, res) => {
  // console.log('dfdfdfdfd')
  if (req.url == '/') {
    fs.createReadStream('./index.html').pipe(res) //输出index.html模板
  } else if(req.url == '/users') { // ajax 数据接口
    // 如果有版本号, 并且客户端与服务器版本一致
    if (req.headers['if-none-match'] && Number(req.headers['if-none-match']) == version) {
      res.statusCode = 304; //不用返回内容, 告诉客户端使用本地缓存
      res.end();
    } else {
      res.setHeader('Etag', version); // 响应头写入etag 
      res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'}); // 发送状态码200, 
      res.end(JSON.stringify({ //返回数据和版本号
        version,
        users
      }));
    }
  }
});

server.listen(3000);
