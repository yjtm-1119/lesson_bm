import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

//JSX语法
//<App /> JS普通对象 
//let app = <App />;
// let root = document.getElementById('root')

// let h1 = <h1>helloworld<span>这是副标题</span></h1>;

// ReactDOM.render(h1,root);



实现页面时刻的显示

function clock(){
    let time = new Date().toLocaleTimeString()
    let element = (
        <div>
            <h1>现在的时间是{time} </h1>
            <h2>这是副标题</h2>
        </div>
    )
    let root = document.querySelector('#root');
    ReactDOM.render(element,root)
}

clock()

setInterval(clock,1000)


//react函数式组件
function Clock(props){
    return (
                <div>
                    <h1>现在的时间是{props.date.toLocaleTimeString()} </h1>
                    <h2>这是函数式组件开发</h2>
                </div>
    )
}


function run(){
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.querySelector('#root')
    )
}


setInterval(run,1000)



