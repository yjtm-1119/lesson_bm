function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    console.log(this.name);

}
const sword = new Person('剑');
console.log(sword.getName());
//构造函数
console.log(Person.prototype.constructor);
console.log(sword.__proto__, Person.prototype,sword.__proto__== Person.prototype);

