import React, { Component } from 'react';
import { is } from 'immutable';
// 基类
class ImmutableComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    const thisState = this.state || {};
    nextProps = nextProps || {};
    nextState = nextState || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length
      || Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }
    for (let propKey of Object.keys(nextProps)) {
      if (!is(thisProps[propKey], nextProps[propKey])) {
        return true;
      }
    }
    for (let stateKey of Object.keys(nextState)) {
      if (!is(thisState[stateKey], nextState[stateKey])) {
        return true;
      }
    }
    return false;
  }
}


export default ImmutableComponent;