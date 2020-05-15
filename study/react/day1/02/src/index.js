import React from 'react';
import ReactDOM from 'react-dom';

//子传父 

class ParentCom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      childDate: null
      
    }
  }

  render() {
    return (
      <div>
        <h1>子元素传递给父元素的数据:{this.state.childDate}</h1> 
        <ChildCom />
      </div>
    )
  }
}

class ChildCom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      msg:'helloworld'
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.sendData}>传递元素给父元素</button>
      </div>
    )
  }
}