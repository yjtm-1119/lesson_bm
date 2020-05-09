- DOM document 文档就是网页  js内存里  文档对象模型
    js ->html 转化
    DOM JS 数据结构tree  appendChild  组成一棵树

    ul>li>text>node
    document.creatElement('tag')   标签节点
    document.creatTextNode('babab')   文本节点



    哪怕是文字 都是节点 都是对象



- 昨天讲的是API
    document.createElement('div')
    document.appendChild()
    document.creatTextNode()  面向API编程

- 面向业务编程
    this.state.liked  true/ false  html 更新
    1.分步
        动态地将like button 按钮添加到页面上
        likebutton 就应该是一个  class  方便复用
        既要用  html  来快速完成dom  又要能添加事件
        1. 要dom节点对象
        2. innerHTML


- js this 指向 你不知道的javascript this 
    this 动态决定   在每个函数里都有   this  是个指针
    具体指向谁呢？ 