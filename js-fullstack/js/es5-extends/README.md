## 原型链继承
```js

  Cat.prototype = new Animal();
  let c1 = new Cat();   // eat = ['fish']
  let c2 = new Cat();   // eat = ['meat']
  let c3 = new Cat();
  let c4 = new Cat();
  c1.eat.push('fish');
  c2.eat.push('meat');
  // c1 c2 ... __proto__ 都会指向同一个地方, 共享
```


## 继承属性
```js
子类构造里面
Animal.call(this);
```


## 继承方法

让子类的 Cat.prototype 能够在原型链查找找到 Animal.prototype



## extends:  继承属性 + 继承方法