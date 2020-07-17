- 全栈项目
  一分为二思想
  前后端分离
  UI与redux分离
  城市数据
  - cityData 默认为空 
   action-type
  - action setCityData 
  - 是否显示 isCitySelectorVisible 默认false
   ACTION_SET_IS_CITY_SELECTOR_VISIBLE
   isLoadingCityData 默认false
   ACTION_SET_IS_LOADING_CITY_DATA
  - 后端API设计流程
    1. mongodb/mysql 写真后端
      mockerAPI 解决了跨域问题
    2. 模块化输出api配置
    3. require json Mocker.mock random 配置随机
  - api ->action -> reducer -> connect -> 组件

  - 数据请求 都放在actions 中 
    异步的actions 中,dispatch 多个action

    