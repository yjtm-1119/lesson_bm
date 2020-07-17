import React from 'react';
import './App.css';

function App() {
  fetch('http://localhost:80/rest/cities')
    .then(data => data.json())
    .then(data => {
    console.log(data)
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
