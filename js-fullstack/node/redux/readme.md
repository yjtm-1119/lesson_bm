## 状态

```js
let isLogin =false;//state
//login-component
isLogin =true;
//logout-component
isLogin = false;
检查 isLogin 
```

## redux 
设计了一套修改我们state  的流程 并且流程是单向的

在我们修改变量的过程中 加入了一些环节 把状态的改变变成可控(监测)的  借助了函数式编程里的一些手段