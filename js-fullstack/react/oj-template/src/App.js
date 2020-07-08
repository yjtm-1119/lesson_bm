import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
//数据跟组件是分离的
import axios from 'axios';
import './mock/data.js';
import { Table } from 'antd';
// /posts/  axios api 请求的url  
// 接受Post 组件作为参数  
//通用性的提供数据请求及更新的解决方案

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];

ReactDOM.render(
  <Table
    columns={columns}
    expandable={{
      expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
  />,
  mountNode,
);
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}
const loadAndRefresh = (url) => (WrappedComponent) => {
  //返回组件
  return class extends Component {
    constructor() {
      super();
      this.state=({
        msg: '',
        content: '',
        
      })
    }
    componentDidMount() {
      //数据请求
      this._loadData()
    }
    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      });
      axios.get(url)
        .then(res=> {
          console.log(res)
          this.setState({
            msg: res.data.title,
            content:res.data.content
          })
          // console.log(msg,content)
        })
    }

    render() {
      const props = {
        msg: this.state.msg,
        content:this.state.content
      }
      return (
        <div>
          <WrappedComponent {...props}/>
        </div>
      )
    }
  }
}
//复用
const WrappedPost = loadAndRefresh('/posts/')(Post);
const WrappedComment = loadAndRefresh('/comments/')(Comment);
function App() {
  return (
    <div className="App">
      {/* <Post/> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}

export default App;
