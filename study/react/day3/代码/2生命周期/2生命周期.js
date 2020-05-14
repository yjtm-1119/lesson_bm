import React,{Component} from 'react';
import ReactDOM from 'react-dom';




class ComLife extends Component{
    constructor(props){
        super(props)//调用继承Component的构造函数
        this.state = {
            msg:"hello world"
        }
        console.log("constructor构造函数")

    }
    componentWillMount(){
        console.log("componentWillMount组件将要渲染")
    }
    componentDidMount(){
        console.log("componentDidMount组件渲染完毕")
    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps组件将要接收新的state和props")
    }
    shouldComponentUpdate(){
        //如果希望更新，就返回为真，不希望更新就返回为false
        console.log("进行判断是否要更新内容")
        console.log(this.state.msg)
        if(this.state.msg==="hello world"){
            console.log(true)
            return true
        }else{
            console.log(false)
            return false
        }
        
    }
    componentWillUpdate(){
        console.log('componentWillUpdate组件将要更新')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate组件更新完毕')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount移除')
    }
    render(){
        console.log('render渲染函数')
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>组件更新</button>
            </div>
        )
    }
    changeMsg=()=>{
        this.setState({
            msg:"hello 老陈"
        })
    }
}

class ParentCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            isShow:true
        }
    }
    render(){
        if(this.state.isShow){
            return (
                <div>
                    <button onClick={this.removeCom}>移除comlife</button>
                    <ComLife></ComLife>
                </div>
            )
        }else{
            return <h1>将comlife已移除</h1>
        }
    }
    removeCom=()=>{
        this.setState({
            isShow:false
        })
    }
}

ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector('#root')
)