import * as actionTypes from './constants';

const defaultState = {
  // 一个页面只有一个loading
  recommendList: [],
  banners: [],
  enterLoading: true
}
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_BANNER:
      return { ...state, banners: action.data };
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return { ...state, recommendList: action.data };
    case actionTypes.CHANGE_ENTER_LOADING:
      return {...state, enterLoading: action.data}
    default:
        return state
  }
}