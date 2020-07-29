- router 
  1. react-router 
    react-router-dom
    react-router-config
  2. react-router 嵌套
    config routes 配置一下清晰了
    当路由比较复杂时,传统的手写router/route配置 变得难以维护，
    企业级的路由配置方案 react-router-config  清晰 易管理
    可维护的routes/index.js 配置
    layout app 中总有几套皮肤, 匹配那个级别的所有路由的  
    routes react-router-config  renderRoutes方法
    renderRoutes(route,routes)

- search  前后端通过接口文档
  - 热门搜索 
  - /api/search  
    参数 null 
    返回值 result.hot
  - 搜索建议
    /suggest?keyword=
    参数 keyword
    返回值 albums
  - 搜索结果
    /search?keyword=