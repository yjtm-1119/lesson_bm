//1.构建一个tea 类
//js 的面对对象比较特别
var Tea = function () {// 匿名函数 值是函数
    console.log('开始给您泡制茶叶，请等等');
}
function Tea(type) {
    //茶类
    this.type = type;
}
Tea.prototype.boilWater = function () {
    console.log('把水煮沸');
}
Tea.prototype.seepTeaBag = function () {
    console.log('用沸水冲泡茶叶');
}
Tea.prototype.pourInCup = function () {
    console.log('把茶水倒进杯子');
}
//在类的原型上添加一个方法
Tea.prototype.addLemon = function () {
    console.log('加柠檬');
}
//抽象 隐去一些执行的细节
Tea.prototype.makeTea = function () {
    this.boilWater();
    this.seepTeaBag();
    this.pourInCup();
    this.addLemon();
    console.log('茶水做好了，请喝吧')
}
// var Tea = new Tea();
// Tea.makeTea();
// coffee.boilWater();
// coffee.brewCoffeeGriends();
// coffee.pourInCup();
// coffee.addSugarAndMilk();
// function Teaa() {

// }
const tea = new Tea('乌龙茶');
tea.makeTea();
console.log(tea.type);