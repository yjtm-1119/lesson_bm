function Person(name, age) {
    this.name = name;
    this.age = age;
}
//覆盖了Object上原有的toString 方法
Person.prototype.toString = function () {
    return 'I am a person,my name is' + this.name;
}
function Man(name, age) {
    console.log(arguments, '----');
    //Person 构造函数  把父类的构造函数执行一下
    Person.apply(this, arguments);
}
Man.prototype = Object.create(Person.prototype);
//再次覆盖
Man.prototype.toString = function () {
    return 'I am a 007,my name is' + this.name;
}
var cxc = new Man("陈新初", 19);
console.log(cxc + "");
var person = new Person('徐剑豪', 20);
console.log(person + "");//类型转换 字符串化
const arr = ['陈新初', '陈方闻'];
//console.log(Object.prototype.toString.call(arr));// { }空对象
// [object Array]