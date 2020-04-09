var fs = require('fs'); // node file system node 自己的模块
var path = require('path'); //路径
// uuid npm 第三方
// fs.readFile('aa.txt', function(err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// })

function getDirFiles(startPath) {
    let result = [];
    // 递归
    function finder(parentPath) {
        // console.log(path);
        let files = fs.readdirSync(parentPath);
        if (!files.length) return;
        // console.log(files);
        files.forEach(function (val, index) {
            // console.log(val, index);
            // 目录还是文件
            let fPath = path.join(parentPath, val);
            // console.log(fPath);
            let stats = fs.statSync(fPath);
            if (stats.isDirectory()) {
                finder(fPath);
            }
            if (stats.isFile()) {
                result.push(fPath);
            }
        })
    }
    finder(
        path.join(process.cwd(), startPath)
    );
    return result;
}
console.log(getDirFiles('src'));