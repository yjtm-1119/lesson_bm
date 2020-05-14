import React from 'react';
import ReactDOM from 'react-dom';

function UserGreet(props){
    return (<h1>欢迎登陆</h1>)
}

function UserLogin(props){
    return (<h1>请先登录</h1>)
}


class ParentCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin:true
        }
    }
    render(){
        if(this.state.isLogin){
            return (<UserGreet></UserGreet>)
        }else{
            return (<UserLogin></UserLogin>)
        }
    }
}


ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector('#root')
)