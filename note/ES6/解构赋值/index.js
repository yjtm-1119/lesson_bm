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


// 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。

// 例一
let { log, sin, cos } = Math;

// 例二
const { log } = console;
log('hello') // hello
// 上面代码的例一将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。例二将console.log赋值到log变量。

// 如果变量名与属性名不一致，必须写成下面这样。

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world'
// 这实际上说明，对象的解构赋值是下面形式的简写（参见《对象的扩展》一章）。

let { foo: foo, bar: bar } = { foo: 'aaa', bar: 'bbb' };
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
foo // error: foo is not defined
// 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。

console.log('---------------------------------');

let {foo: {bar}} = {baz: 'baz'};