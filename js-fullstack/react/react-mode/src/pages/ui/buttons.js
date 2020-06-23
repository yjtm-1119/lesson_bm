import React from 'react'
import { Card, Button, Radio } from 'antd'
import './buttons.less'

export default class Buttons extends React.Component {

 state = {
   loading: true,
   size: 'default'
 }

  handleCloseLoading = () => {
    this.setState({
      loading: false
    })
  }

  handleChange = (e) => {
    // console.log(e)
    this.setState({
      size: e.target.value
    })
  }

  render() {
    return(
      <div>
        <Card title="基础按钮" className="card-wrap">
          <Button type="primary">按钮</Button>
          <Button>按钮</Button>
          <Button type="dashed">虚线按钮</Button>
          <Button type="danger">危险按钮</Button>
          <Button disabled>不可编辑</Button>
        </Card>
        <Card title="图形按钮" className="card-wrap">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜素</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="loading按钮" className="card-wrap">
          <Button type="primary" loading={true}>确定</Button>
          <Button type="primary" shape="circle" loading={true}></Button>
          <Button type="primary" loading={true}>点击加载</Button>
          <Button shape="circle" loading={true}></Button>
          <Button loading={this.state.loading}>关闭加载</Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="图形组" style={{marginBottom:10}}>
          <Button.Group>
            <Button type="primary" icon="left" style={{marginRight:0}}>前进</Button>
            <Button type="primary" icon="right">后退</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="card-wrap">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>按钮</Button>
          <Button size={this.state.size}>按钮</Button>
          <Button type="dashed" size={this.state.size}>虚线按钮</Button>
          <Button type="danger" size={this.state.size}>危险按钮</Button>
          <Button disabled size={this.state.size}>不可编辑</Button>
        </Card>
      </div>
    )
  }
}