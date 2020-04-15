//长方形面积函数
function area(w, h) {
    if (arguments.length < 2) {
        throw new Error('参数不够');
        return
    }
    return w * h;
    if (typeof w != 'number' && typeof h != 'number') {
        throw new Error('参数类型有误');
        return 
    }
}


// var area = function (w, h) {
//     //匿名函数

// }
// const getarea = (w, h) => w * h;
console.log(area(1));
