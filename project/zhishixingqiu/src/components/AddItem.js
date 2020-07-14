import React, { Component } from 'react';
import './AddItem.css';
class AddItem extends Component {
  state = {}
  handleChange(e) {
    console.log(e.target.value)
  }
  render() { 
    return ( 
      <div id= "addstar">
        <img className="addPagetupian" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594700090968&di=e3d83a717b8c95af7adc514fd91240d7&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg" alt=""/>
        <input type="text" placeholder="请输入星球名字" id="addInput"
        onChange={this.handleChange.bind(this)}
        />
      </div>
     );
  }
}
 
export default AddItem;