'use strict';//启动严格模式
// predicate 可以由用户自定义的函数
//返回合条件的元素下标 如果没有找到返回-1
function findIndex(array, predicate,context) {
    for (var i = 0; i < array.length; i++) {
        // 函数执行时要考虑上下文环境
        if(predicate.call(context,array[i], i)) {
            return i;
        }
    }
    return -1;
}
//在js中函数可以作为参数  js中函数是一等对象
console.log(findIndex([1, 2, 3, 4], function (item, i) {
    console.log(this)
    if (item == 3) return true;
}, [1, 2, 3, 4]));
