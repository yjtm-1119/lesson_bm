import React, { Component } from 'react';

class Comment extends Component {
    render() {
        // console.log(this.props);
        let { comment } = this.props
        return (
            <div>{comment.username}: {comment.content}</div>
        )
    }
}
export default Comment;