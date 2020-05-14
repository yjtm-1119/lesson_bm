import React from 'react';
import ReactDOM from 'react-dom';


function Childcom(props) {
    console.log(props);

    let title = <h2>我是副标题</h2>
    console.log(this);

    let weather = props.weather
    let isGo = weather === '下雨' ? '不出门' : '出门'
    return (
        <div>
            {title}
            <h1>函数式组件helloworld</h1>
            <div>
                是否出门?
        <span>
                    {isGo}
                </span>
            </div>
        </div>
    )
}

// 类组件的定义
class HelloWorld extends React.Component {
    render() {
        console.log(this);
        return (
            <div>
                <h1>类组件helloworld</h1>
                <h2>鸡你太美:{this.props.name}</h2>
                <Childcom weather={this.props.weather} />
            </div>
        )
    }
}


// ReactDOM.render(
//   <Childcom weather="出太阳"/>,
//   document.querySelector('#root')
// )
ReactDOM.render(

    <HelloWorld weather="出太阳" name="蔡徐坤" />,
    document.querySelector('#root')
)
