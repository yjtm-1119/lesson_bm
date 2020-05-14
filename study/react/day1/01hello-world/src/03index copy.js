import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



let exampleStyle = {
    background: 'skyblue',
    borderBottom: '3px solid red',
    'background-image': "url(https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png)"
}

let element = (
    <div>
        <h1 style={exampleStyle}>蔡徐坤</h1>
    </div>
)

let classStr = "redBg"
let element2 = (
    <div>
        <h1 className={'abc' + classStr}>蔡徐坤</h1>
    </div>
)

let classStr2 = ['abc2', 'redBg2'].join(" ")
let element3 = (
    <div>
        {/* 这里写注释 */}
        <h1 className={classStr2} style={exampleStyle}>蔡sadsaf 坤</h1>
    </div>
)
ReactDOM.render(
    element3,
    document.querySelector('#root')
)



