import React, { Component } from 'react';
class Header extends Component {
  state = {}
  // nextProps= {}==this.props={}对比两个对象？
  shallowEqual(objA, objB) {
    if (typeof objA !== 'object' ||
      typeof objB !== 'object') {
      return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let key of keysA) {
      if (objA[key] !== objB[key]) {
        return false;
      }
    }
    return true;
  }
  shouldComponentUpdate(nextProps, nextState) {
    let isSame = this.shallowEqual(nextProps, this.props) &&
      this.shallowEqual(nextState, this.state);
    return !isSame;
  }
  render() {
    console.log('Header render')
    const { title } = this.props;
    return (
      <div>
        Header
        {title}
      </div>
    );
  }
}

export default Header;