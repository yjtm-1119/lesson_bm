import {
  ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
  ACTION_SET_CITY_DATA
} from './actions'
export default {
  isCitySelectorVisible(state = false, action) {
    let { type, payload } = action
    switch (type) {
      case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
        return paylod
      default:
    }
    return state
  },
  cityData(state = null, action) {
    let { type, payload } = action
    switch (type) {
      case ACTION_SET_CITY_DATA:
        return payload
      default:
    }
    return state
  }
  // isLoadingCityData 完成这个reducer 和对应action 并且在fetchCityData 中处理它相关的逻辑
}