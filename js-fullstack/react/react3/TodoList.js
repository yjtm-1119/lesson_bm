import React, { Component } from 'react';
// import 'antd/dist/antd.css';
// import { Input, Button, List } from 'antd'
import store from './store/index.js';
// import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './store/actionTypes';
import { changeInputAction,addItemAction,deleteItemAction, getListAction} from './store/actionCreators';
import TodoListUI from './TodoListUI.js';
import axios from 'axios';

class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState());
    this.state = store.getState()
    store.subscribe(this.storeChange)
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
  componentDidMount() {
    axios.get('http://rap2.taobao.org:38080/app/mock/258495/get/api/v1/something')
      .then((res) => {
        console.log(res);
        const data = res.data
        const action = getListAction(data)
        store.dispatch(action)
      })
  }
  changeInputValue = (e) => {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value
    // }
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange = () => {
    this.setState(store.getState())
  }
  clickBtn = () => {
    // const action = {
    //   type: ADD_ITEM
    // }
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem=(index)=>{
    // const action = {
    //   type: DELETE_ITEM,
    //   index
    // }
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;