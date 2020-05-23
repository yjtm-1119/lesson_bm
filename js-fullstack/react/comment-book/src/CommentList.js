import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Comment from './Comment'


class CommentList extends Component {
    static propTypes = { // 检查类型
        comments: PropTypes.array
    }


    static defaultProps = { //默认值
        comments: []
    }


    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}
                        index={i}
                    />
                )}
            </div>
        )
    }
}


export default CommentList