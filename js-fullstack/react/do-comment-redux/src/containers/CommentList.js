//负责ui
// 就是一个部门 向中央财务申请 我要用一下comments
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
class CommentListContainer extends Component {
  render() {
    console.log(this.props.comments)
    return (
      <CommentList
        comments= {this.props.comments}
       />
    )
  }
}
//state 是redux 给我们的  可以进行读操作
const mapStateToProps = (state) => {
  return {
    comments:state.comments
  }
}

// const mapDispatchToProps = (state) => {
//   return {
//     onDeleteComment: (commentIndex) => {
//       dispatch(deletecomment(commentIndex))
//     }
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(CommentListContainer);