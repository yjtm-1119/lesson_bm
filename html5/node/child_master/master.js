//主进程
const cp = require('child_process');//创建子进程
const child_process = cp.fork(__dirname + '/child.js');
/* 公司 天下没 有难做的生意18人 员工 */
child_process.send('haha');  //有很多耗时的任务要交给他
child_process.on('message', (str) => {
    console.log('parent', str);
})
