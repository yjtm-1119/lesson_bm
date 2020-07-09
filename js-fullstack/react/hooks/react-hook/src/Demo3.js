import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  useEffect(() => {
    console.log('index 来了')
    //使用return 一个匿名函数解绑  但是只要状态发生了改变 就会发生解绑副作用
    return () => {
      console.log('index 走了')
    }
  },[ ])//第二个数组参数为空的时候 不进行任何操作，只要状态发生改变就会 return 发生解绑  数组参数有值的时候，只有该值状态发生改变  才会return 并进行解绑
  return <h2>www.baidu.com</h2>
}
function List() {
  useEffect(() => {
    console.log('list 来了')
  })
  return <h2>List Page</h2>
}

function Demo3() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log(`useEffect=>You clicked ${count} times`);
  // })//异步操作
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me!</button>
      <Router>
        <ul>
          <li><Link to='/'>首页</Link></li>
          <li><Link to='/list/'>列表</Link></li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/"  component ={List}  />
      </Router>
    </div>
  )
}
export default Demo3;