const http = require('http');


http.createServer((req, res) => {
    if (req.url === '/api') {
        let posts = ['js', 'php'];
        res.end(JSON.stringify(posts));
    }
})
    .listen(9090, () => {
        console.log(9090);
    })