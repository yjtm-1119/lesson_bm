import React from 'react';
import ReactDOM from 'react-dom';
const { createStore, combineReducers } = require('redux');
let isLogin = false;
let posts = [];
// 状态 reducer(纯函数)
//state表示上一次的状态
const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
function loginReducer(state = isLogin, action) {
  switch (action.type) {
    case LOGIN_STATUS:
      return !state  //返回新的state 不是修改原来的那个变量
    default:
      return state; //default  默认值
  }
  // console.log(1);
  // return false;
}
function postsReducer(state = posts, action) {
  switch (action.type) {
    case POSTS_STATUS:
      return action.newPosts;
    default:
      return state
  }
  // console.log(2);
  // return [];
}

// action:纯对象 ({}), 必须有一个type 字段  用以区分的作用  一般是常量  整个应用唯一


const loginAction = {
  type: LOGIN_STATUS,
  a: 1
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a: 1 }, { a: 2 }]
}
// combineReducers 集合 
const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer
})
//状态存储到store里面
const store = createStore(rootReducer);//createstore经过reducer里 生成store   didpatch action 也要reducer 生成store   reducer要兼顾两者  所以需要判断是用户触发还是状态默认值
// console.log(store);
//mapStateToProps
console.log('before', store.getState());

//action -reducer
//mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
//dispatch了之后就会去到 loginReducer postReducer

class App extends React.Component {
  handleLogin = () => {
    store.dispatch(loginAction);
  }
  render() {
    return (
      <div>
        isLogin:{store.getState().login ? '1' : '0'}
        posts:{store.getState().posts.length}
        <button onClick= {this.handleLogin}>change login state</button>
      </div>
    )
  }
}

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
render();
//订阅 store   store 变化了  通知我回调
store.subscribe(() => {
  render();
})

