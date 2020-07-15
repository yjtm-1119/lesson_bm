import React, { Component } from 'react';

class Search extends Component {
  state = {}
  render() {
    return (
      <div id="searchInput">
        <div id="search">
          <input type="text" className="search" placeholder="搜索用户、星球或内容" />
          <span className="iconfont">&#xe625;</span>
        </div>
      </div>
    );
  }
}

export default Search;