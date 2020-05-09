//  koa是轻量级的web开发框架
const koa = require('koa');//引入koa
const app = new koa();  //web server
const fs = require('fs');
// const func = ctx => {
//     console.log('func');
//     ctx.response.body = 'func';

// }
const main = ctx => {
    console.log(ctx.request, '----------------');
    // ctx.response.body = 'hello world';
    // req   response
    ctx.response.type = 'html';//响应头
    //分层  网站 大一点的网站  返回一个html文件(MVC View)
    // 协议 操作系统(内存运行在node   文件系统 D:  网络 数据库
    // const html = fs.readFileSync('./template.html', 'utf-8');
    fs.readFile('./template.html', 'utf-8', function (err, data) {
        console.log(data, '+++++++++++++++++++++++++++++++++++++++++++++');
        ctx.response.body = data;
    })

}
//     ctx.response.body = `
//     <html>
//         <head></head>
//         <body>
//             <h1>hello world!</h1>
//         </body>
//     </html>
//     `

// app.use(func);
app.use(main);//启动了一个服务  给访问者request用

app.listen(3000);
