import React from 'react';
import ReactDOM from 'react-dom';


class ParentCom extends React.Component{
    
    render(){
        console.log(this.props)
        return (
            <div>
                <h1>组件插槽</h1>
                {this.props.children}
                <ChildCom>
                    <h1 data-position="header">这是放置到头部的内容</h1>
                    <h1 data-position="main">这是放置到主要的内容</h1>
                    <h1 data-position="footer">这是放置到尾部的内容</h1>
                </ChildCom>
            </div>
        )
    }
}

class ChildCom extends React.Component{
    render(){
        let headerCom,mainCom,footerCom;
        this.props.children.forEach((item,index)=>{
           if(item.props['data-position']==='header'){
            headerCom = item
           }else if(item.props['data-position']==='main'){
               mainCom = item
           }else{
               footerCom = item
           }
        })
        return (
            <div>
                <div className="header">
                    {headerCom}
                </div>
                <div className="main">
                    {mainCom}
                </div>
                <div className="footer">
                    {footerCom}
                </div>
            </div>
        )
    }
}


class RootCom extends React.Component{
    constructor(props){
        super(props)
        //console.log(props)
        this.state = {
            arr:[1,2,3]
        }
    }
    render(){
        return (
            <ParentCom>
                <h2 data-name="a" data-index={this.state.arr[0]}>子组件1</h2>
                <h2 data-name="b" data-index={this.state.arr[1]}>子组件2</h2>
                <h2 data-name="c" data-index={this.state.arr[2]}>子组件3</h2>
            </ParentCom>
        )
    }
}

ReactDOM.render(
    <RootCom></RootCom>
    ,
    document.querySelector("#root")
)
