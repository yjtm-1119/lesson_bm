// process node  进程全局对象
process.on('message', (str) => {
    console.log('child' + str);
    //子进程 把活给干了后,子进程可以偷偷地跑到另外一个CPU上去再挂载一个进程
    //可以把多核能力运用起来
    process.send('hehe');
})
