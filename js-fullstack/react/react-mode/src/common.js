import React from 'react'
import { Row } from 'antd'
import Header from './components/Header/index'
// import Home from './page/home/index'
import './style/commont.less'

export default class Common extends React.Component{

  render() {
    return (
      <div>
        <Row className="simple-page">
          <Header menuType="second"/>
        </Row>
        <Row className="container">
          { this.props.children }
        </Row>
      </div>
    )
  }
}