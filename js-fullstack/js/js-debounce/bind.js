// bind call  apply
//bind  调用函数除了bind(this) 之外  可以让我们分批传递参数
function sum(a, b, c) {
    return a + b + c;
}

sum.call(null, 1, 10,20);//参数必须传完整
let adds=sum.bind(null, 1, 10);//可以不完整
//会返回一个函数，让我们接着传递剩下的参数
let res = adds(20);
console.log(res);


let str = `
`
let str1 = ` `
let str2 = ` 
edq`
let str3=`dqd`
function test(reg, str) {
    return reg.test(str);
}

let whiteSpace = /\n/g
console.log(test(whiteSpace,str));
console.log(test(whiteSpace,str1));
console.log(test(whiteSpace,str2));
console.log(test(whiteSpace, str3));


let hasWhiteSpace = test.bind(null, whiteSpace);
console.log(hasWhiteSpace(str1));
console.log(hasWhiteSpace(str2));
console.log(hasWhiteSpace(str3));

