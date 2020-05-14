import React from 'react';
import ReactDOM from 'react-dom';

class ParentCom extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        
        return (
            <div >
                <form action="http://www.baidu.com">
                    <div className="child" >
                        <h1>helloworld</h1>
                        <button onClick={this.parentEvent}>提交</button>
                    </div>

                </form>
                
                {/* 使用ES6箭头函数传递多个参数 */}
                <button  onClick={(e)=>{this.parentEvent1('msg:helloworld',e)}}>提交</button>
                {/* //不使用ES6箭头函数传递多个参数的方式 */}
                <button  onClick={function(e){this.parentEvent1('不使用es6,msg:helloworld',e)}.bind(this)}>提交</button>
            
            </div>
        )
    }
    parentEvent=(e)=>{
        console.log(e.preventDefault)
        e.preventDefault()
        //e.preventDefault()
        //return false;
    }
    parentEvent1 = (msg,e)=>{
        console.log(msg)
        console.log(e)
        
    }
}


ReactDOM.render(
    <ParentCom></ParentCom>,
    document.querySelector("#root")
)