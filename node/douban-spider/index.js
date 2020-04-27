const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');
// 请求 top250
// 浏览器输入 一个 url， get
https.get('https://movie.douban.com/top250', function (res) {
    console.log(res);
    // 分段返回的 自己拼接
    let html = '';
    // 有数据产生的时候
    res.on('data', function (chunk) {
        html = html + chunk;
    })
    res.on('end', function () {
        console.log(html);
        const $ = cheerio.load(html);
        // 25
        // document.querySelector
        // li 下面的 item
        // 
        let allFilms = [];
        $('li .item').each(function () {
            // this 循环时当前这个电影
            // 当前这个电影下面的title
            // this.querySelector
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text();
            const pic = $('.pic img', this).attr('src');
            // 存 数据库
            // 存成 一个 json 文件 fs
            // console.log(title, star, pic);
            allFilms.push({
                title, star, pic
            })
        })
        // 
        fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {
            if (!err) {
                console.log('文件写入完毕');
            }
        })
        // 图片下载一下
        downloadImage(allFilms);
    })
})
function downloadImage(allFilms) {
    for (let i = 0; i < allFilms.length; i++) {
        const pucUrl = allFilms[i].pic;
        // 下载
        // 页面 url  === html(普通文本 utf-8)  浏览器帮你渲染了
        // 图片 url  === 图片内容(binary)  浏览器也帮你渲染了
        // xx.png   双击打一个图片  
        // 请求 ->  拿到内容
        // fs.writeFile('./xx.png', '内容')
        https.get(pucUrl, function (res) {
            res.setEncoding('binary');
            let str = '';
            res.on('data', function (chunk) {
                str += chunk;
            })
            res.on('end', function () {
                // 回调函数位置放到最后一个
                // 回调函数 第一个参数 基本都是 err 对象
                fs.writeFile(`./images/${i}.png`, str, 'binary', function (err) {
                    // console.log(err);
                    if (!err) {
                        console.log(`第${i}张图片下载成功`);
                    }
                })
            })
        })
    }
}
