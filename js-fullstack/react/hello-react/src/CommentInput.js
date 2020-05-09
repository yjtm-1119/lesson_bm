import React from 'react';


// 做表单， 搭积木，  分工 
// 天下无难做的应用， 分成一个个组件慢慢做
function CommentInput() {
    return (
        <div className="comment-input">
            <div className="comment-field">
                <span className="comment-field-name">用户名:</span>
                <div className="comment-field-input">
                    <input type="text" />
                </div>
            </div>
            <div className="comment-field">
                <span className="comment-field-name">评论内容:</span>
                <div className="comment-field-input">
                    <textarea></textarea>
                </div>
            </div>
            <div className="comment-field-button">
                <button>发布</button>
            </div>
        </div>
    )
}


export default CommentInput;