import React from 'react';
import ReactDOM from 'react-dom';
import './04style.css';


let exampleStyle = {
    background:"skyblue",
    borderBottom:"4px solid red",
    'background-image':"url(https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png)"
}

let element = (
    <div>
        <h1 style={exampleStyle}>helloworld</h1>
    </div>
)

let classStr = "redBg"
let element2 = (
    <div>
        <h1 className={"abc "+classStr}>helloworld</h1>
    </div>
)

let classStr2 = ['abc2','redBg2'].join(" ")
let element3 = (
    <div>
        {/* 这里写注释 */}
        <h1 className={classStr2} style={exampleStyle}>helloworld</h1>
    </div>
)



ReactDOM.render(
    element3,
    document.querySelector('#root')
)






