- 博客网站  我们还欠缺哪些技能
    React 做 UI  组件化思维
    - 列表
    - 详情
    - 评论
    node做后端  后台数据库？ mysql  mongodb
    怎么样向我们的应用提供数据呢？
    - 爬取  cherrio
    - MVC  Model(连接Mysql)-View(React)-Controller(Node)
    可以实现增删改查 但不启用mysql 这么繁琐？
    - 简单服务的话  json文件作为资源 代替数据库
    使用json_server  来启动它  resrful api  格式
    /posts post  {id:,title:,content:,}

    /posts/show/1  看某篇文章的URL
    复杂  不能有动词  /posts/1    show的概念是由谁表达的
    由GET 动词  表达
    /posts   POST  
JSON  是前后端交互使用的数据格式 
    设计一个URL
    汇款需求，从账户1向账户2汇款500元


    /accounts/:1/transfer/:500/to/:2
    restful  动词+url  表达一个事件  但是url里面不要出现动词


    url 是用来暴露资源的
    /transaction  转账 POST

    {from:1,to:2,amount:500.00}

    RESTful  是后端URL的国际设计标