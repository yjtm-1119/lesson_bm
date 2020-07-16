import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => { //无状态组件就是一个标准的函数或者方法 没有任何业务逻辑的组件 一般把UI组件都写成五状态组件 性能更好 没有state 
  const { inputValue, changeInputValue, clickBtn, list, deleteItem } = props
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <Input
          placeholder={inputValue}
          style={{ width: '300px', marginRight: '10px' }}
          onChange={changeInputValue}
          value={inputValue}
        />
        <Button
          type="primary"
          onClick={clickBtn}
        >增加</Button>
      </div>
      <div style={{ margin: '20px', width: '400px' }}>
        <List
          bordered
          dataSource={list}
          renderItem={(item, index) => (<List.Item onClick={
            // (index) => { this.props.deleteItem(index) }
            // this.props.deleteItem.bind(this,index)
            () => { deleteItem(index) }
          }>{item}</List.Item>)}>
        </List>
      </div>
    </div>
  );
}

export default TodoListUI;