import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';
import Collect from './Collect';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      header
      <Route path="/login" component={Login} />
      <PrivateRoute path='/collect' component={Collect} />
    </BrowserRouter>
  );
}

export default App;
