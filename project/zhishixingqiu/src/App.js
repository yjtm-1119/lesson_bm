import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/Index';
import AddItem from './components/AddItem';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/additem/" component={AddItem} />
    </Router>
  );
}

export default App;
