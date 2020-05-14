import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {
                    title:"第一节 React事件",
                    content:"事件内容"
                },
                {
                    title:"第二节 React数据传递",
                    content:"数据传递内容",
                },
                {
                    title:"第三节 条件渲染",
                    content:"条件渲染内容",
                }
            ]
        }
    }

    render(){
        let listArr = [];
        for(let i=0;i<this.state.list.length;i++){
            let item = (
                <li>
                    <h3>{this.state.list[i].title}</h3>
                    <p>{this.state.list[i].content}</p>
                </li>
            )
            listArr.push(item)
        }
        return (
            <div>
                <h1>
                    今天课程内容
                </h1>

                <ul>
                    {listArr}
                    <li>
                        <h3>这是标题</h3>
                        <p>内容</p>
                    </li>
                </ul>

            </div>
        )
    }
}


ReactDOM.render(
    <Welcome></Welcome>,
    document.querySelector('#root')
)