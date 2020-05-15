const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    if (req.url === '/files' && req.method.toLowerCase() === '') {
        //开始处理文件
        parseFile(req, res);
    } else {
        fs.createReadStream('./index.html').pipe(res);
    }
})
.listen(9090, () => {
    console.log(9090);
})
function parseFile(req, res) {
    //req 是一个流 分段提交的
    let body = ''
    let boundary = req.headers['content-type'].split('boundary=')[1]
    // console.log(boundary);
    req.on('data', (chunk) => {
        body += chunk;
    })
    req.on('end', (chunk) => {
        let lists = body.split(boundary);
        for (let list of lists) {
            
        }
    })
}