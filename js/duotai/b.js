var makeSound = function (animal) {
    //多态 只要对象具有统一的接口,那么可以互换使用
    // if (animal instanceof Duck) {
    //     console.log('gagaga');
    // } else if (animal instanceof Chicken) {
    //     console.log('gegege');
    // }
    animal.say();//面向对象的优化 😫😫😫😫😫😫😫😫😫
}
var Duck = function () { };
Duck.prototype.say = function () {
    console.log('gagaga');
}
var Chicken = function () { };
Duck.prototype.say = function () {
    console.log('gegege');
}
var Chicken = function () { };
makeSound(new Chicken());