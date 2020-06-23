import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Utils from '../../utils/utils'

import axios from '../../axios'
import { connect } from 'react-redux'
class Header extends React.Component{

  state = {}

  componentWillMount() {
    this.setState(
      {
        userName: 'sjj'
      }
    )
    setInterval(() => {
      let sysTime = Utils.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000);
    this.getWeatherAPIData()
  }
  getWeatherAPIData() {
    const city = '南昌'
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.status === 'success') {
        let data = res.results[0].weather_data[0]
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather:data.weather
        })
      }
    })
  }

  render() {
    // const menuType = this.props.menuType
    const { menuName, menuType } = this.props
    return (
      <div className="header">
        <Row className="header-top">

          {
            menuType ? 
            <Col span={6} className="logos">
              <img src="favicon.ico" alt=""/>
              <span>sjj react项目</span>
            </Col> : ''
          }

          <Col span={menuType ? 18:24}>
            <span>欢迎, { this.state.userName }</span>
            <a href="#" style={menuType? {color: '#fff'} : {color: '#1890ff'} }>退出</a>
          </Col>
        </Row>

        {
          menuType ? '' :
          <Row className="breadcrumb">
            <Col span={4} className="breadcrumb-title">
              { this.props.menuName }
            </Col>
            <Col span={20} className="weather">
              <span className="date">时间: { this.state.sysTime }</span>
              <span className="weather-img">
                <img src={ this.state.dayPictureUrl } alt=""/>
              </span>
              <span className="weather-detail">{ this.state.weather }</span>
            </Col>
          </Row>
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    menuName: state.menuName
  }
}
export default connect(mapStateToProps)(Header)