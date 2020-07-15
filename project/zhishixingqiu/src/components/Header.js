import React, { Component } from 'react';
class Header extends Component {
  state = {}
  render() {
    return (
      <div className="header">
        <h2 className="title">知识星球</h2>
        <span className="iconfont">&#xe69d;</span>
      </div>
    );
  }
}

export default Header;