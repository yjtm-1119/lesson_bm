import React from 'react';
//hash模式
//import {HashRouter as Router,Link,Route} from 'react-router-dom'

//history模式/后端匹配使用
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'


function Home(){
    return (
        <div>
            <h1>admini首页</h1>
        </div>
    )
}

function Me(props){
    console.log(props)
    return (
        <div>
            <h1>admin个人中心</h1>
        </div>
    )
}

function Product(){
    return (
        <div>
            <h1>admin产品页面</h1>
        </div>
    )
}

function News(props){
    console.log(props)
    return (
        <div>
            新闻页，新闻id：{props.match.params.id}
        </div>
    )
}

class App extends React.Component{
    
    render(){
        let meObj = {
            pathname:"/me",//跳转的路径
            search:"?username=admin",//get请求参数
            hash:"#abc",//设置的HASH值
            state:{msg:'helloworld'}//传入组件的数据
        };
        return (
            <div id="app">
                

                <Router>
                    <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to={ meObj }   replace>个人中心</Link>
                        <Link to="/news/4568789">新闻页</Link>
                    </div>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/me" exact component={Me}></Route>
                    <Route path="/news/:id" component={News}></Route>
                </Router>
            </div>
        )
    }
}

export default App