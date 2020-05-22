const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers':'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Headers': 'content-type,X-Requested-With',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Max-Age':-1,//preflight 预检请求结果缓存的时间
        'Access-Control-Allow-Credentials': true//与cookie有关
    })
    let posts = ['js', 'php'];
    res.end(JSON.stringify(posts));
})
    .listen(9090, () => {
        console.log(9090);
    });