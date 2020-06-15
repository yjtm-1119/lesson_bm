import React from 'react';
import Header from './components/Header';

class App extends React.Component{
  state = {
    title:'old'
  }
  // shouldComponentUpdate() {
  //   //返回true渲染 false不渲染  
  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title:'old'
      })
    },2000)
  }
  render() {
    return (
      <div>
        123123123
         <Header title={this.state.title}/>
      </div>
    )
  }
}

export default App;
