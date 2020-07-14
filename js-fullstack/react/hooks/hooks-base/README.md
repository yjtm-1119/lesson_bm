生命周期三个阶段:
1. 初始化阶段 render() componentDidMount
2. 更新阶段  
  - state改变
    shouldComponentUpdate(默认true) componentWillUpdate render(更新频繁 复杂逻辑一般不写在render中) componentDidUpdate 
  - props改变
    多一个判断  componentWillReceiveProps(默认true)
3. 卸载阶段  componentWillUnMount


1. useState
2. useEffect
3. useMemo  缓存数据
4. useCallback 缓存函数