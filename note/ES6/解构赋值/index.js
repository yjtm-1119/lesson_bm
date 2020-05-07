// function f() {
//     console.log('aaa');
// }

// let [x = f()] = [1];
// console.log(x);

let x;
if ([1][0] === undefined) {
    x = f();
} else {
    x = [1][0];
}
console.log(x);
// [1][0]等价于
// var a = [1]，取a[0]的值，
// 即[1][0] = a[0]
