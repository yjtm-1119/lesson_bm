var id = 10;
// 箭头函数定义在全局作用域
let fun = () => {
    console.log(this.id)
};

fun();     // 10
// this的指向不会改变，永远指向Window对象
fun.call({ id: 20 });     // 10
fun.apply({ id: 20 });    // 10
fun.bind({ id: 20 })();   // 10