import * as actionTypes from './constants';
const defaultStatus = {
  recommendList: [],
  banners: [],
  enterLoading: true
}
export default (state = defaultStatus, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return { ...state, banners: action.data }
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return { ...state, recommendList: action.data }
    case actionTypes.CHANGE_ENTER_LOADING:
      return { ...state, enterLoading: action.data }
    default:
      return state
  }
}