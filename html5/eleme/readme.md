- 工作流
scripts 强化我们的开发
dev 启动http服务
styl stylus 编译为css
json-server 商家信息
- dom api 是过去式
MVVM{{}}  在js data:
历史  切图仔  php/java +html/css 10年前<%=message%> 前端不需要了解数据后端
js 8年前 web 2.0 fetch  / ajax  js  可以主动请求数据 前后端可以分庭抗争  dom/ api
4年前 vue/react  时代  MVVM时代  连数据也要处理

小程序和vue一样 
MVVM优秀的地方在于 简单
- 天生集成数据驱动  data {{}}: src
- 页面时响应式的  只要数据变了，界面就会变

- inline-block 考点来了
inline 没有设置宽高 兄弟间相安无事
block 兄弟间换行
两列式布局 inline-block  副作用  兄弟间会产生间隙 
浏览器实现inline-block的天坑  换行\n
font-size 
父元素 font-size 0
换行元素首尾相连 影响结构的可读性

- stylus 向css提供了函数功能    
    利用返回值的叫函数
    要复用css代码  完成了css模块化  mixin  混合

- 图片，手机的屏幕像素不一样
@media 条件 (-webkit-min-deivice-pixell-ration:3)
图片的命名   ...@2x.png   ...@3x.png