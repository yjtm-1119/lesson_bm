import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'

//用于通过动作，创建新的state
const reducer = function(state={num:0},action){
    console.log(action)
    switch(action.type){
        case "add":
            state.num++;
            break;
        case 'decrement':
            state.num--;
            break;
        default:
            break;
    }
    return {...state}//相当于对象的COPY
}


//创建仓库
const store = createStore(reducer)
console.log(store)


function add(){
    //通过仓库的方法dispatch进行修改数据
    store.dispatch({type:"add",content:{id:1,msg:"helloworld"}})
    console.log(store.getState())
}

function decrement(){
    //通过仓库的方法dispatch进行修改数据
    store.dispatch({type:"decrement"})
    console.log(store.getState())

}

//函数式计数器
const Counter = function(props){
    //console.log(store.getState())
    let state = store.getState()
    return (
        <div>
            <h1>计数数量：{state.num}</h1>

            <button onClick={add}>计数+1</button>
            <button onClick={decrement}>计数-1</button>
        </div>
    )

}



ReactDOM.render(<Counter></Counter>,document.querySelector("#root"))

store.subscribe(()=>{
    ReactDOM.render(<Counter></Counter>,document.querySelector("#root"))
})


