// es module
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';//默认导入
import { name } from './App'//命名导入
import * as serviceWorker from './serviceWorker';
//移动端 react-native
//pc端 react-dom  一次学习 随处编写  一次编写 到处运行
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
