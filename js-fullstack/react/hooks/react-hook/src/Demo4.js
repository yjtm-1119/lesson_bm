import React, { useContext, useState,createContext } from 'react';
const CountContext = createContext();
function Counter() {
  let count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}
function Demo4() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You has clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>click me!</button>
      <CountContext.Provider value={count}>
        <Counter/>
      </CountContext.Provider>
    </div>
  )
}
export default Demo4;
