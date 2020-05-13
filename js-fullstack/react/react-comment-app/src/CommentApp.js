import React, { Component } from 'react'; //按需加载  es6 解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// let { a } = {a: 1, b: 2, c: 3}
// react facebook  高级 OO 
class CommentApp extends Component {
  constructor() {
    super();
    this.state = {
      comments: [{
        username: '刘策',
        content: '读书太快了'
      }, {
        username: '邹子欢',
        content: '千万家产不如写代码'
      }]
    }
  }
  render() { // 接口
    const { comments } = this.state
    return (
      <div className="wrapper">
        {/* onSubmit 事件函数？   */}
        {/* <a href="" onClick></a>   叫什么？   state  props 
          react 组件  render  页面输出，   state 内部数据   props 外部数据
        */}
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        {/*
        
        用户新提交了评论怎么办？
        { 伸手向父组件要什么？ 1. 静态页面  2. 动态化的， state   props     显示评论列表 } */}
        <CommentList b="2" comments={comments} />
      </div>
    )
  }


  handleSubmitComment(comment) {
    // console.log(comment);
    // let { comments } = this.state;
    // comments.unshift(comment);

    // this.setState({
    //   comments: comments
    // })
    // // console.log(comments, '+++++++++++++++')
    this.setState({
      comments: [comment, ...this.state.comments]
    })
  }
}


export default CommentApp;