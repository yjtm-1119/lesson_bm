<div id="root">
    <span class="demo">
        This is a span.
  </span>
    <p>DOM</p>
</div>

对象字面量,表达能力
JSON  描述一下


DOM 树  AST  Tree  Abstract 

{

}



{
  name:'徐剑豪',
  sex:'男',
  isSingle:false
}






html document  什么关系？

- URL  输入  打开页面后 发生了什么？
  download  indexedDB.html  html标签
1. 空白页面  背后发生了什么 ?
    启动了一个tab  进程1(主进程)
2. window.url = http://127.0.0.1:8080/
html 文档标记语言
- tab  主进程 url 
 启动一个网络请求  url
- 渲染页面进程

 打开一个应用 就是启动了一个进程

 web应用 是一个多进程的架构  

chrome打开页面的时候 
启动四个进程  应用进程(pid  计算及资源调用的最小单元)   浏览器运行
tab  负责一次页面渲染   主进程
下面有两个子进程  Network Service  http 请求  200
GPU计算  高速css绘制

GPU  加速   chrome  为了让页面加载更快  使用GPU 来绘制页面 这也是chrome 战胜IE的原因

html 文本  text/html 

将文本 ->  dom 对象  内存里面 ...  浏览器是怎么编程的？

chrome  使用v8引擎

BOM Browser  Object Model
DOM Document Object Model

 abstract syntax  tree  抽象语法树
api  可以把所有的css 都查询出来 document.styleSheets


了解页面的生成过程   要去了解浏览器  它是操作系统中的应用   
通过进程分阶段来理解它

text/html   html  文本  ，转变成js  document  