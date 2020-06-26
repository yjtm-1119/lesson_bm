import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => { //无状态组件就是一个标准的函数或者方法 没有任何业务逻辑的组件 一般把UI组件都写成五状态组件 性能更好 没有state 
  return (
    <div>
      <div style={{ margin: '20px' }}>
        <Input
          placeholder={props.inputValue}
          style={{ width: '300px', marginRight: '10px' }}
          onChange={props.changeInputValue}
          value={props.inputValue}
        />
        <Button
          type="primary"
          onClick={props.clickBtn}
        >增加</Button>
      </div>
      <div style={{ margin: '20px', width: '400px' }}>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={
            // (index) => { this.props.deleteItem(index) }
            // this.props.deleteItem.bind(this,index)
            ()=>{props.deleteItem(index)}
          }>{item}</List.Item>)}>
        </List>
      </div>
    </div>
  );
}

export default TodoListUI;