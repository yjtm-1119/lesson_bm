import React, { Component } from 'react'
import PropTypes from 'prop-types';
// console.log(PropTypes, '---------------');
class CommentInput extends Component {
    static propTypes = {   // 有什么用？ 检验 
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    // 不同的生命周期函数
    componentWillMount() { // 即将挂载, 
        this._loadUsername()
    }
    componentDidMount() { // mount 挂载
        this.textarea.focus()  // ?
    }
    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    handleUsernameBlur(event) {
        // console.log(event.target.value)
        this._saveUsername(event.target.value) // 私有方法
    }
    handleUsernameChange(event) {
        // console.log(event.target.value)
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
        if (this.props.onSubmit) { // 不能一根筋
            this.props.onSubmit({ //健壮性
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            // react ref  html id  dom 
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
          </button>
                </div>
            </div>
        )
    }
}


export default CommentInput;