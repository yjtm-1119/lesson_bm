import React from 'react';
import Notification from './Notification'
import './App.css';

function App() {
  return (
    <div className="App">
      <Notification>
        <h2>成功</h2>
        <h2>失败</h2>
      </Notification>
    </div>
  );
}

export default App;
