export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';
export function setFrom(from) {
  return {
    type: ACTION_SET_FROM,
    payload: from,
  }
}

export function setTo(to) {
  return {
    type: ACTION_SET_TO,
    payload: to,
  }
}

// export function exchangeFromTo(from,to) {
//   return {
//     type: EXCHANGE_FROM_TO,
//     payload: {
//       from:to,
//       to:from
//     }
//   }
// }

export function exchangeFromTo() {
  return (dispatch,getState) => {
    const { from, to } = getState()
    dispatch(setFrom(to))
    dispatch(setTo(from))
  }
  //两个状态
}