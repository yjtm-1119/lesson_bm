- 首页有问题
    



1. 做react/vue 项目  仿一个音乐类的
2. 做一个可以上线的业务  思路 架构 结构  技能点

- react 组件由 组件component 实例和一个css文件构成  styl
    create-react-app  天生支持css/less  
    不一定要用官方的create-react-app，下次自己的项目 我就可以从这个项目开始  项目模板
    类文件大写 一个文件夹一个组件  便于维护和模块化
- 单页应用？  Single Page Application  SPA 
    只有一个页面的应用  提升网站的用户体验 很快
    点击路由时 不会重新刷新整个页面  而是根据路由的配置把相应的组件显示出来

pc端最好用 hashrouter  兼容性更好
移动端最好用  historyRouter url  更语义化

- 根据界面  可以分析出  头尾不动 中间内容根据Route 匹配
- Loading  组件
  哪个目录下创建
  loading 服务于任何listAPI  列表组件  是一个通用组件

  1. 数据请求阶段显示loading.gif  
  2. 数据到达后  隐藏他
  父组件  要给loading  传参  

- api/  分层的能力  职责分离  是代码复杂  且大型化的前提
    每个路由模块页面独立一个js文件  便于维护 和代码阅读

- 长的列表页面 在移动 支持scroll