// function add(a, b) {
//     if (typeof a != 'number' && typeof b != 'number') {
//         throw new Error('出入参数有误！');
//         return;
//     }
//     return a+b
// }
//console.log(add(5,5.5));
let p = (a, b) => {
    if (typeof a != 'number' && typeof b != 'number') {
        throw new Error('出入参数有误！');
        return;
    }
    return a+b
}
console.log(p(5,5.5));
