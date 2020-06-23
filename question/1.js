setTimeout(() => console.log(1));
setTimeout(() => {
  console.log(2);
  new Promise(resolve => {
    console.log(3);
    resolve();
  }).then(() => {
    console.log(4);
  });
});
new Promise(() => console.log(5));
console.log(6);
setTimeout(() => console.log(7));
//promise的构造函数是同步执行，promise.then中的函数是异步执行。