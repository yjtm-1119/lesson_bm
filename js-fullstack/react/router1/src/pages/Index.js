import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { cid: 123, title: '我的世界' },
        { cid: 456, title: '英雄联盟' },
        { cid: 789, title: 'QQ飞车' },
      ]
    }
    this.props.history.push("/home/");
  }
  render() {
    return (
      <div>
        <h2>游戏大厅</h2>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={'/list/' + item.cid}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index;