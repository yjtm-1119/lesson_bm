const fs = require('fs');


fs.readFile('./readme.md', (err, data) => {//node 异步的  无阻塞的
    //异步问题
    if (err) {
        console.log('出错了');
    }
    console.log(data);
})

console.log('123');
