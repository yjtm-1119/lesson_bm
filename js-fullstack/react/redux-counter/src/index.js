import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';//创建单一状态树
import * as serviceWorker from './serviceWorker';
import counter from './reducers';
//
import Counter from './components/Counter';
const store = createStore(counter);

// console.log(store.getState());

const render = () => ReactDOM.render(
  <Counter
    //读store中的状态
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);

render()
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
