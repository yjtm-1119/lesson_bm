// 滴滴 黄轶
import React from "react";
// 常用的好的包 
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import BScroll from "better-scroll";
import "./scroll.styl";
// 容器，父组件 
class Scroll extends React.Component {
  componentDidMount() {
    this.scrollView = ReactDOM.findDOMNode(
      this.refs.scrollView);
    // console.log(this.scrollView);
    if (!this.bScroll) { // 防止多次渲染 单例
      this.bScroll = new BScroll(this.scrollView, {
        probeType: 3,
        click: this.props.click
      })
      if (this.props.onScroll) {
        this.bScroll.on('scroll', (scroll) => {
          this.props.onScroll(scroll);
        })
      }
    }
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }
  render() {
    console.log(this.props.children);
    return (<div className="scroll-view" ref="scrollView">
      {this.props.children}
    </div>)
  }
}


Scroll.defaultProps = {
  click: true,
  onScroll: null,
  refresh: false
}
Scroll.propTypes = {
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}


export default Scroll