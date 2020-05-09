import React from 'react';
import CommentInput from './CommentInput.js';
import CommentList from './CommentList.js';
import './index.css'

function CommentApp() {
    return (
        <div className="wrapper">
            <CommentInput />
            <CommentList/>
        </div>
    )
}
export default CommentApp;