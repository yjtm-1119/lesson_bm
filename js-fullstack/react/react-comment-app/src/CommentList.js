import React, { Component } from 'react';//按需加载 解构
import Comment from './Comment'
class CommentList extends Component {
    render() {
        console.log(this.props, '++++');
        let { comments } = this.props;
        return (
            <div>


                {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
            // <div key={i}>
            //     {comment.username}:{comment.content}
            // </div>




        )
    }
}
export default CommentList;