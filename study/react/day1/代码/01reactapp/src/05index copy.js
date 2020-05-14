import React from 'react';
import ReactDOM from 'react-dom';
import './04style.css';


//函数式组件

function Childcom(props){
    console.log(props)

    let title = <h2>我是副标题</h2>
    let weather = props.weather
    //条件判断 
    let isGo = weather=='下雨' ?"不出门":"出门"

    return (
        <div>
            <h1>函数式组件helloworld</h1>
            {title}

            <div>
                是否出门？
                <span>{isGo}</span>
            </div>
        </div>
    )
}


//类组件定义
class HelloWorld extends React.Component{
    render(){
        console.log(this)
        return (
            <div>
                <h1>类组件定义HELLOWORLD</h1>
                <h1>hello:{this.props.name}</h1>
                <Childcom weather={this.props.weather} />
            </div>
        )
    }



}



// ReactDOM.render(
//     <Childcom weather="出太阳" />,
//     document.querySelector('#root')
// )


ReactDOM.render(
    <HelloWorld name="老陈" weather="下雨" />,
    document.querySelector('#root')
)






