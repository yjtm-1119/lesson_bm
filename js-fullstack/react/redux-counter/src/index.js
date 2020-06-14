import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';//创建单一状态树
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import counter from './reducers';
//

const store = createStore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
