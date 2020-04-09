const fs = require('fs');
const path = require('path');

console.log(fs.readdirSync(path.join(process.cwd(),'src')));//得到项目的根目录物理路径


  // 子目录， 孙目录 递归目录
    // 递归 
    // 1. 一个大问题 分解成很多个相同的小问题
    // 2. 退出条件 目录下没有子目录了
    let result = [];
    // process node 全局变量 进程
    // console.log(path.join(
    //        process.cwd(), startPath
    //      ), '------');
    // 1.读取所有文件?
    let files = fs.readdirSync( // 读目录
        path.join(
            process.cwd(), startPath
        )
    );
    // console.log(files);
    for (let file of files) {
        // console.log(file);
        let stats = fs.statSync(
            path.join(process.cwd(), startPath, file)
        );
        if (stats.isFile()) {
            result.push(file)
        }
        if (stats.isDirectory()) {

        }
        // console.log(stats);
    }
    return result;