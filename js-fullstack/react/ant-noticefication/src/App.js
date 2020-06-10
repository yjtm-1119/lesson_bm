import React from 'react';
// import Notification from './Notification'
import notification from './Notification'
import './App.css';
// import App2 from './App2';

function App() {
  return (
    <div className="App">
      {/* <App2 />
      <Notification>
        <h2>成功</h2>
        <h2>失败</h2>
      </Notification> */}
      <button onClick={() => {
        notification.open({
          title:'this is a title'
        })
      }}>
        open
      </button>
      <button onClick={() => {
        notification.close()
      }}>
        close
      </button>
    </div>
  );
}

export default App;
