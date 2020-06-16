import React from 'react';
import Header from './components/Header';
import { fromJS } from 'immutable';
import ImmntableComponent from './components/common';
class App extends React.Component{
  state = {
    title:fromJS([1,2,3])
  }
  // shouldComponentUpdate() {
  //   //返回true渲染 false不渲染  
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title:fromJS([1,2,3])
      })
    },2000)
  }
  render() {
    console.log('app render')
    return (
      <div>
        123123123
         <Header title={this.state.title}/>
      </div>
    )
  }
}

export default App;
