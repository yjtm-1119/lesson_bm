import React, { Component } from 'react';
import ImmntableComponent from './common';
import { is } from 'immutable';
class Header extends ImmntableComponent {
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
  // shouldComponentUpdate(nextProps, nextState) {
  //   let isSame = this.shallowEqual(nextProps, this.props) &&
  //     this.shallowEqual(nextState, this.state);
  //   return !isSame;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   const thisProps = this.props || {};
  //   const thisState = this.state || {};
  //   nextProps = nextProps || {};
  //   nextState = nextState || {};
  //   if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
  //     Object.keys(thisState).length !== Object.keys(nextState).length) {
  //     return true;
  //   }
  //   for (let proKey of nextProps) {
  //     if (!is(thisProps[proKey], nextProps[proKey])) {
  //       return true
  //     }
  //   }
  //   for (let stateKey of nextState) {
  //     if (!is(thisState[stateKey], nextState[stateKey])) {
  //       return true
  //     }
  //   }
  //   return false
  // }
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