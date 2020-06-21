// import { combineReducers } from 'redux-immutable';
import { createStore, 
  combineReducers,
   applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import HomeReducer from './reducers/home/index';

// 多个 reducer 合并成一个

const rootReducer = combineReducers({
  home: HomeReducer
})
// rootReducer = { home: immutable }
// rootReducer 整个 rootReducer 并不是 immutable 的
// state  = { title: fromJS() }
// HomeReducer 里面数据 immutable
// rootReducer 里面的数据 还是 原生 js
// 创建 store 只能接收到 一个 reducer 
// 所以 创建之前 合并一下

export default createStore(rootReducer)