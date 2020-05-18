const express = require('express');
const data = require('./db.json');
// koa 是 express 的小孩子
const app = express();
// 是的
// get   请求谓语动词


app.get('/', function (req, res) {
    // api 用？  res.end(JSON.stringif(express))
    // Content-Type: application/json; charset=utf-8
    res.json(data);
})


// 设计一个URL , 访问第一首诗歌  
// restful  URL 暴露一个资源，  快播 乐视，卖版权 优酷， iqiyi 
// 一切皆资源 URL  资源的名词
// get 
app.get('/posts/:id', function (req, res) {
    let id = req.params.id;
    let post = data.posts.filter(post => post.id == id);
    res.json(post)
    // id
    // data.posts  id   
    // res.json()
})

// app.post("/posts",)



app.listen(8080);