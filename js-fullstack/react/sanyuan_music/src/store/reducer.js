import { combineReducers } from "redux";
import { reducer as recommendReducer } from '../application/Recommend/store/index';

export default combineReducers({
  recommend: recommendReducer
})