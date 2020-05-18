const http = require('http');
const fs = require('fs');
const users = require('./users.json');
http.createServer((req, res) => {
    let version = 1;
    if (req.url == '/') {
        res.setHeader('ETag', version);
        res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        fs.createReadStream('index.html').pipe(res);
        return;
    } else if (req.url == '/users') {
        res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
        res.end(JSON.stringify(users));
        if (req.headers['If-Match']) {
            if (req.headers['if-match'] == 1) {
                res.statusCode = 304;
                res.end();
                return;
            } else {
                res.setHeader('ETag', version);
                res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
                console.log('更新了版本');
                return;
            }
        }
    }
    return;
})
    .listen(3001)