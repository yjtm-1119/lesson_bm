import React,{useState,useEffect} from 'react';

function App() {
  const [nowTime, setNowTime] = useState(new Date());
  useEffect(() => {
    let timer = setInterval(() => {
      setNowTime(new Date())
    }, 1000)
    return () => {
      clearInterval(timer);
    }
  },[])
  return (
    <div>
      {nowTime.toString()}
    </div>
  );
}

export default App;
