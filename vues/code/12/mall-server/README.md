### 商城（服务端）

+ 界面网易严选商城
+ 测试数据采集自网易严选商城
+ 功能和数据库参考ecshop
+ 服务端api基于Ｎode.js+ThinkJS+MySQL
+ 计划添加基于Vue.js的后台管理系统、PC版、Ｗap版

### 本地开发环境配置
+ 克隆项目到本地

+ 创建数据库nideshop并导入项目根目录下的nideshop.sql
```
CREATE SCHEMA `nideshop` DEFAULT CHARACTER SET utf8mb4 ;
```
> 注意数据库字符编码为utf8mb4 
+ 更改数据库配置
  src/common/config/database.js
  
```
const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'nideshop',
    prefix: 'nideshop_',
    encoding: 'utf8mb4',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '你的密码',
    dateStrings: true
};
```

+ 安装依赖并启动
```
npm install
npm start
```
访问http://127.0.0.1:8360/




### 功能列表
+ 首页
+ 分类首页、分类商品、新品首发、人气推荐商品页面
+ 商品详情页面，包含加入购物车、收藏商品、商品评论功能
+ 搜索功能
+ 专题功能
+ 品牌功能
+ 完整的购物流程，商品的加入、编辑、删除、批量选择，收货地址的选择，下单支付
+ 会员中心（订单、收藏、足迹、收货地址、意见反馈）
....



### 步骤：

1个页面分为1个view组件

1个view组件分配1个路由



### 页面得步骤：

1-每个页面需要得数据先获取

2-在根据功能和内容将UI组件导入

3-将数据渲染到UI组件

4-加上交互和跳转

