import React, {
  useEffect, useState,
  useMemo, useCallback,
} from 'react'
// state = {
//   a: null,
//   b: [],
//   c: {}
// }
// this.setState()
let arr = [1, 2]
let set = new Set();
function Demo() {
  console.log('render');
  const [inputVal, setVal] = useState('海阔天空');
  const [list, setList] = useState([]);
  // const [val, setVal] = ['', () => {}]
  // const val = [1, 2]
  const val = useMemo(() => [1, 2]);
  console.log(val === arr);
  const handleChange = useCallback((event) => {
    setVal(event.target.value);
  })
  useEffect(() => {
    fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=' + inputVal)
      .then(res => res.json())
      .then((res) => {
        setList(res.result.songs);
      })
  }, [inputVal]);
  // 依赖 react 检查 依赖里面有没有数据发生变化，没变化就不会重新调用
  // []  一次  componentDidMopunt
  // [inputVal] 多次  componentDidUpdate
  return (
    <div>
      {list.length}
      <input type="text" value={inputVal}
        onChange={handleChange} />
    </div>
  )
}
// () => {
//   const val = [1,2]
//   const handleChange = () => {}
// }
// () => {
//   const val = 
//   const handleChange = 
// }
export default Demo;