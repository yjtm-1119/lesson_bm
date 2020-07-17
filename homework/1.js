let state = {
  name: 'lilei',
  age: 18
}
let str = 'my name is {name}, age is {age}';
// let str = 'my name is lilei, age is 18';
function compile(obj, tpl) {
  var reg1 = /{name}/, reg2 = /{age}/
  return tpl.replace(reg1, obj.name).replace(reg2, obj.age);
}
console.log(compile(state, str) === 'my name is lilei, age is 18')