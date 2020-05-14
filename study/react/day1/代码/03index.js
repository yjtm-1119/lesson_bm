import React from 'react';
import ReactDOM from 'react-dom';






import './App.css'


let time = new Date().toLocaleTimeString()
let str = '当前时间是：'
let element = (
    <div>
        <h1>helloworld</h1>
        <h2>{str+time}</h2>
    </div>
)


console.log(element)

let man = '发热';
let element2 = (
    <div>
        <h1>今天是否隔离</h1>
        <h2>{man=="发热"?<button>隔离</button>:"躺床上"}</h2>
    </div>
)

//let man = '发热';
let element4 = (
    <div>
        <span>横着躺</span>
        <span>竖着躺</span>
    </div>
)
man = '正常'
let element3 = (
    <div>
        <h1>今天是否隔离</h1>
        <h2>{man=="发热"?<button>隔离</button>:element4}</h2>
    </div>
)

let color = 'bgRed'
let logo = 'https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png'
//HTML的样式类名要写className,因为class在js当中是关键词
let element5 = (
    <div className={color}>
        <img src={logo} />
        红色的背景颜色
    </div>

)


ReactDOM.render(
    element5,
    document.getElementById('root')

)





let exampleStyle = {
    background:"skyblue",
    boderBottom:"1px solid red"
}

let element = (
    <div>
        <h1 style={exampleStyle}>helloworld</h1>
    </div>
)

