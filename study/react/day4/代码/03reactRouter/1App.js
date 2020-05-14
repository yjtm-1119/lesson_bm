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

function Me(){
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


class App extends React.Component{
    
    render(){
        return (
            <div id="app">
                {/* <div>所有页面普通内容</div> */}
                <Router>
                    <Route path="/" exact component={()=>(<div>首页</div>)}></Route>
                    <Route path="/me" component={()=>(<div>me</div>)}></Route>
                    <Route path="/product" component={()=>(<div>product</div>)}></Route>
                </Router>

                <Router>
                    {/* <div className="nav">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/me">个人中心</Link>
                    </div> */}
                    <Route path="/admin/" exact component={Home}></Route>
                    <Route path="/admin/product" component={Product}></Route>
                    <Route path="/admin/me" exact component={Me}></Route>
                </Router>
            </div>
        )
    }
}

export default App