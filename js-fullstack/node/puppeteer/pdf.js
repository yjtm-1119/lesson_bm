// async  await
const fs = require('fs');
const promise1 = new Promise((resolve, reject) => {
    fs.readFile('./package.json', (err, info) => {
        resolve(info);
    })
})
const promise2 = (info) => {
    new Promise((resolve, reject) => {
        fs.writeFile('./p.json', info, (err) => {
            if (!err) {
                resolve();
            }
        })
    })
}
const promise3 = (time) => {
    new Promise((resolve, seject) => {
        setTimeout(() => {

        }, timeout);
    })
}
promise1.then((info) => {
    //then里面返回了promise的话 可以链式调用
    return promise2(info);
})
    .then(() => {
        return promise3(2000);
    })
    .then(() => {
        //等着前面then里面的promise完成
        console.log('读写完成！');
    })





async function run() {
    //async+await代替了.then
    let info = await promise1  //promise1  info === resolve了什么
    await promise2(info);
    await promise3(2000);
    console.log('ok');
}
run();