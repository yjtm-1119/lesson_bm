const express = require('express');
const md5 = require('md5');
const app = express();
//GET 路由
app.get('/big.js', (req, res) => {
  // console.log(res);
  console.log('-------------------------------------------')
  const fs = require('fs');
  const jsContent = fs.readFileSync('./big.js', 'utf-8');
  // 一堆头部字段
  //强缓存 200 from memory/disk cache,请求不会到达服务器
  res.setHeader('Cache-Control', 'max-age=3')

  //协商缓存:请求会到达服务器
  //if-none-match 浏览器发现 上一次请求 服务器 有Etag设置 浏览器自动发送一个
  //if-modified-since ：文件修改了文件的最后修改会发生变化
  //服务器 对比前后两次文件有没有变化 从时间角度考虑  有缺陷
  const Etag = md5(jsContent);
  const oldEtag = req.headers['if-none-match']
  if (Etag === oldEtag) {
    // 文件没有变化
    //从缓存里面读取到304(not-modified)
    res.sendStatus(304).end('');
    return;
  }
  if (req.headers)
    res.setHeader('Etag', Etag);
  res.end(jsContent);

})

app.listen(9090, () => {
  console.log(9090);
})