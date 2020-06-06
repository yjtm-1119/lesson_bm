import React from "react";
import loadingImg from './loading.gif';//一切静态资源皆可引入
import "./loading.styl"

class Loading extends React.Component {
  render() {
    // console.log(this.props.show);
    let displayStyle = this.props.show === true ? { display: "" } : { display: "none" };
    return (
      <div className="loading-container" style={displayStyle}>
        <div className="loading-wrapper">
          <img src={loadingImg} width="18px" height="18px" alt="loading" />
          <div className="loading-title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}
export default Loading