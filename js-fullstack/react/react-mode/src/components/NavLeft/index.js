import React from 'react'
import MenuConfig from './../../config/menuConfig'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { switchMenu } from './../../redux/action'
import { Menu, Col } from 'antd';
import  './index.less'
const { SubMenu } = Menu;

class NavLeft extends React.Component{

  state = {
    currentKey: '/home'
  }

  handleClick = ({item, key}) => {
    console.log(item)
    const { dispatch } = this.props
    dispatch(switchMenu(item.props.title))
    this.setState({
      currentKey: key
    })
  }

  componentWillMount() {
    const menuTreeNode =  this.renderMenu(MenuConfig)

    // 取到点击的路由
    let currentKey = window.location.hash.replace(/#|\?.*$/g, '')

    this.setState({
      currentKey,
      menuTreeNode
    })
  }

  // 菜单渲染
  renderMenu=(data) => {
    return data.map((item)=> {
      if (item.children) {
        return <SubMenu title={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={ item.key }>
          { item.title }
        </NavLink>
      </Menu.Item>
    })
  }

  render() {
    return (
      <div>
        {/* <div className="logo">
          <img src="favicon.ico" alt=""/>
          <h1>sjj recat项目</h1>
        </div> */}
        <div className="logo">
          <Col span={6}>
            <img src="favicon.ico" alt=""/>
          </Col>
          <Col span={18}>
            <h2>sjjrecat</h2>
          </Col>
        </div>
        <Menu theme="dark" selectedKeys={[this.state.currentKey]} onClick={this.handleClick}>
          { this.state.menuTreeNode }
        </Menu>
      </div>
    )
  }
}

export default connect()(NavLeft)