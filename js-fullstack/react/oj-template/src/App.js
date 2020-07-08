import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//数据跟组件是分离的
import axios from 'axios';
import './mock/data.js';
// /posts/  axios api 请求的url  
// 接受Post 组件作为参数  
//通用性的提供数据请求及更新的解决方案
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}
const loadAndRefresh = (url) => (WrappedComponent) => {
  //返回组件
  return class extends Component {
    constructor() {
      super();
      this.state=({
        msg: '',
        content: '',
        
      })
    }
    componentDidMount() {
      //数据请求
      this._loadData()
    }
    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      });
      axios.get(url)
        .then(res=> {
          console.log(res)
          this.setState({
            msg: res.data.title,
            content:res.data.content
          })
          // console.log(msg,content)
        })
    }

    render() {
      const props = {
        msg: this.state.msg,
        content:this.state.content
      }
      return (
        <div>
          <WrappedComponent {...props}/>
        </div>
      )
    }
  }
}
//复用
const WrappedPost = loadAndRefresh('/posts/')(Post);
const WrappedComment = loadAndRefresh('/comments/')(Comment);
function App() {
  return (
    <div className="App">
      {/* <Post/> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;
