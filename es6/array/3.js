var obj = {
    a: 10,
    b: () => {
        console.log(this.a); // undefined
        console.log(this); // Window 
    },
    c: function () {
        console.log(this.a); // 10
        console.log(this); // {a: 10, b: ƒ, c: ƒ}
    }
}
obj.b();
obj.c();
// var obj = {
//     a: 10,
//     b: function () {
//         console.log(this.a); //10
//     },
//     c: function () {
//         return () => {
//             console.log(this.a); //10
//         }
//     }
// }
// obj.b();
// obj.c()();
// let Fun = (name, age) => {
//     this.name = name;
//     this.age = age;
// };
// let p = new Fun('张三', 18);

var fun = () => { }
console.log(fun.prototype); //undefined
function f() { }
console.log(f.prototype);//{constructor:f}