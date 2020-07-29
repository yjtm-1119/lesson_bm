import * as actionTypes from './constants';
const defaultState = {
  artist: {}
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ARTIST:
      return {...state, artist: action.data}
    default:
      return state;
  }
}
