import React, { useState, createContext, useContext, useEffect,useRef } from 'react'
const context = createContext({
  theme: 'red'
})

function P() {
  let [theme, setTheme] = useState('red');
  // let [a, setA] = useState(1);
  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('adas');
  //     setTheme(fn2())
  //   }, 500)
  // })

  let changeColor=setTimeout(() => {
    console.log('adas');
    setTheme(fn2())
  }, 10)
  function fn2() {
    return '#' + (Math.random() * 0x1000000 << 0).toString(16);
  }
  function handleStop() {
    clearTimeout(changeColor);
    // setTheme('green');
    // clearTimeout(changeColor);
  }
  return (
    <div>
      <p >{theme}</p>
      <button onClick={handleStop}>变绿</button>
      <context.Provider value={theme}>
        <Child a="1" />
      </context.Provider>
    </div>
  )
}
function Child() {
  return <Son />
}
function Son() {
  const ref= useRef()
  let theme = useContext(context);
  useEffect(() => {
    console.log(ref.current);
  })
  return (
    <h2 style={{ backgroundColor: theme }}
      ref={ref}
    >qwdwqdq</h2>
  )
}
export default P;