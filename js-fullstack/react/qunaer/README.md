1. css reset 
    normalize.css
    index.css  css 移动业务的设置  

2. 无状态组件的创建流程刻意练习
    - 组件插入父级组件中，思考好props 
    - 组件的类型如果是无状态组件
        prop-types css propTypes
        形参props 
        return (<div></div>)
    - props 解构出来要的prop

3. 年轻的react hooks 全新开发方式
    class Component->function
    函数式编程
    class +constructor + 生命周期函数+render
    -> function  +react hooks
    - useCallback  缓存一个函数
    - useMemo 

4. 状态组件编写顺序 
    - 数据  Provider store 
5. redux 
    简单的redux 项目结构
        store.js createStore reducers
            中间件 axios  redux-thunk 支持异步  
        reducers.js  combineReducers
        actions.js  数据请求  状态改变的触发都由actions来负责
            ActionTypes  可读性  
    - redux API -> 设计状态(reducer+actions)
        初始值 from to 两个reducer函数 
        函数 初始值 action retrun 初始值
        状态会怎么改变  动作的声明  SET_FROM
        - switch case  
        - {type,payload} action 
        - actionTypes  可读性 
        - actions 写出来
    - 数据组件化 
        1. connect 高阶返回组件 
        connect({
            mapState,
            mapDispatch
        })(Component)
    - reducer  
        1. action标准做法
            - 返回{type:,payload:}用于更新reducer的状态
            组件里的事件，生命周期等功能 主要是和数据打交道  归为Action来做
            - 所有的action export function 
            在组件里引入需要的actions
            - bindAtionCreators
            actions 变成本地调用的函数
                dispatch
            - useMemo 包一下缓存函数
            - connect 中去第二个参数返回 action
    1. action   
        from 北京
        to  南昌
        两个action   
        修改的本质  redux action的改变 


- from to的复盘
    1. redux 哲学 编程思想
    reducers 纯函数  返回状态及接受状态的更新
    那一刻只有一个状态  与之对应 
    - actions actionsTypes
        是更新reducer的使者  dipatch action
    from to 都有独立的reducer函数和action

    - exchangeFromTo()
    dispatch getState