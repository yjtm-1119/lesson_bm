const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  // console.log(req);
  let stat = fs.statSync('./a.txt');
  if (req.headers['if-modified-since']) {
    // console.log(typeof req.headers['if-modified-since'] );
    // console.log(typeof stat.mtime)
    if (req.headers['if-modified-since'] == stat.mtime) {
      res.statusCode = 304
      res.end();
      return;
    } else {
      res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'})
      res.end('修改了');
      return;
    }
  }
   // 同步, 阻塞
  res.setHeader('Last-Modified', stat.mtime) //响应头
  // fs.createReadStream('a.txt').pipe(res);
  res.end('hello')
})
.listen(5200)