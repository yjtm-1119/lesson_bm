const fs = require('fs');
const Koa = require('koa'); // web node 开发框架
const app = new Koa();

const main = ctx => {
    // console.log(ctx.request.url, '++++++++++++++');
    if (ctx.request.url === '/yb.jpeg') {
        // 得到了提供图片服务的所在
        ctx.response.type = 'image';
        ctx.response.body = fs.createReadStream('./yb.jpeg');
    } else {
        ctx.response.type = 'html'; // 响应头  png  css js
        //在服务器端 打开可读流， TCP 
        ctx.response.body = fs.createReadStream('./template.html');
    }

}

// const main = ctx => {
//   if (ctx.request.path !== '/') {
//     ctx.response.type = 'html';
//     ctx.response.body = '<a href="/">Index Page</a>';
//   } else {
//     ctx.response.body = 'Hello World';
//   }
// }

app.use(main);
app.listen(8080)
