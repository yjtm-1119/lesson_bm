- 事件监听 执行逻辑是什么？
  浏览器 chrome.exe  启动了一个进程
  js 是chrome里的语言编辑器来执行的 
  html + css  DOM树 数据结构
  js 执行 脚本
  事件  是异步
  - 注册一个事件？
  - 事件发生的时候是怎么执行的？
  js  单线程语言 onload
  轮循注册事件的地方

订阅,发布者模式

房  楼盘  发布者(发布一个有房卖的信息)
买房者  订阅者 
建模

- listen  可以添加订阅者
  saleOffice.clientList.push(fn); 形成订阅关系
- saleOffice 发布者
  trigger  有事通知
  把所有的订阅者都执行一遍
- apply  指定 函数运行的时候内部的this   arguments  
document.body.addEventListener('click',fn) ;
发布者 doucument.body  有订阅者
订阅者 fn
document.body.events = []
click trigger
event.each(fn);
  