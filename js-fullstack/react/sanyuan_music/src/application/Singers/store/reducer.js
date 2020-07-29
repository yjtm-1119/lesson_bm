const defaultState = {
  category: "",
  alpha: "",
  singerList: [],
  enterLoading: true,
  pullUpLoading: false,
  pullDownLoading: false,
  listOffset: 0, // 请求列表的偏移不是page，是个数
}

export default (state = defaultState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}