import React from 'react';
import ReactDOM from 'react-dom';
import './01props.css'

//在父元素中使用state去控制子元素props的从而达到父元素数据传递给子元素

class ParentCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true
    }
    this.changeShow = this.changeShow.bind(this)
  }
  render() {
    return (
      <div>
        <button onClick={this.changeShow}>控制子元素显示</button>
        <ChildCom isActive={this.state.isActive} />
      </div>
    )
  }
  changeShow() {
    this.setState({
      isActive: !this.state.isActive
    })
  }
}

class ChildCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let strClass = null;
    if (this.props.isActive) {
      strClass = 'active'
    } else {
      strClass = ''
    }
    return (
      <div className={"content" + strClass}>
        <h1>我是子元素</h1>
      </div>
    )
  }
}
ReactDOM.render(
  <ParentCom />,
  document.querySelector('#root')
)