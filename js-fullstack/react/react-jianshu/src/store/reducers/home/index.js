import { fromJS } from 'immutable';

const defaultState = {
  homeList: []
}
// reducer: 原生 js 对象 改成 
// state 已经变成 immutable 结构的

export default function(state = defaultState, action) {
  switch(action.type) {
    case '':
      // get set 
      state.a = 123;
      return {
        ...state
      };
    default:
      return defaultState
  }
}