import React, { Component } from 'react'; //按需加载  es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// let { a } = {a: 1, b: 2, c: 3}
// react facebook  高级 OO 
class CommentApp extends Component {
  render() { // 接口
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList />
      </div>
    )
  }

  handleSubmitComment(comment) {
    console.log(comment);
  }
}

export default CommentApp;