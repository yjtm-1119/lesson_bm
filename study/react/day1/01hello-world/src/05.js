import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //状态 (数据)  --》view
    //构造函数初始化数据  将需要改变的数据初始化到state中
    //再通过调用setState的方式动态修改数据
    //绝对不能直接修改state数据  这样不会重新被渲染
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    // console.log(this.state.time);

  }
  render() {
    // console.log('这是渲染函数');
    // this.state.time=new Date().toLocaleTimeString()
    return (
      <div>
        <h1>当前时间:{this.state.time}</h1>
      </div>
    )
  }
  //生命周期函数  某个时间点触发的函数  组件渲染完成时的函数
  componentDidMount() {
    setInterval(() => {
      console.log(this.state.time);
      // this.state.time = new Date().toLocaleTimeString()
      //这样修改state里的值  不会立即修改dom里面的内容 react 会在这个函数所有设置状态改变后 统一对比虚拟dom对象 然后再统一修改  提升性能
      //小程序也是借鉴react状态管理
      this.setState({
        time:new Date().toLocaleTimeString()
      })
      // console.log(this.state.time);
      
    }, 1000)
  }

}

ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
)

// setInterval(() => {
//   ReactDOM.render(
//     <Clock />,
//     document.querySelector('#root')
//   )
//   console.log(new Date());

// },1000)
