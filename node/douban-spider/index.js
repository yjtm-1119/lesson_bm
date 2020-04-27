const https = require('https');
// 请求豆瓣top250
// 浏览器里输入一个url  基本都是get 请求  
https.get('https://movie.douban.com/top250', function (res) {
    console.log(res);
    //分段返回  要自己拼接
    let html = '';
    //有数据产生的时候  on data
    res.on('data', function (chunk) {
        html += chunk;//拼接
    })
    //所有数据返回完毕 数据拼接完成
    res.on('end', function () {
        console.log(html);
        
    })
})