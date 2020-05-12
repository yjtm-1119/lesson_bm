import React, { Component } from 'react';


class CommentInput extends Component {
    constructor() { // 构造函数
        super(); // 父类的构造函数先执行 必须的 
        this.state = {    //状态   react 下一个玄学， 
            username: '',
            content: ''
        }
    }

    render() {
        // react jsx   { js 动态区域  }
        // 请大家尝试  解构方法， 从this.state 解出来 username , content 两个量
        let { username, content } = this.state // es6 


        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-filed-input">
                        <input type="text" value={username}
                            onChange={this.handleUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容</span>
                    <div className="comment-field-input">
                        <textarea value={content}
                            onChange={this.handleContentChange.bind(this)}
                        ></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }


    handleUsernameChange(event) {
        // console.log(event);
        // DOM   
        this.setState({
            username: event.target.value
        })
    }


    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }


    handleSubmit() {
        // console.log(this.state);
        const { username, content } = this.state;
        this.props.onSubmit({ username, content });
        this.setState({
            content: ''
        })
    }
}


export default CommentInput;