// let { foo: { bar } } = { baz: 'baz' };
// console.log(baz);

// 上面代码中，等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。原因很简单，因为foo这时等于undefined，再取子属性就会报错。
// ??????????
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);

const { foo } = obj1;
console.log(foo);// "bar"
console.log(obj2.foo);//bar
console.log(obj1.foo);//bar



