import { combineReducers } from "redux"

function oneReducer(state = {}, action) {
    return state;
}
  
const reducer = combineReducers({
    oneReducer
});

export default reducer
