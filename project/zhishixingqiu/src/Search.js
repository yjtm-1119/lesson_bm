import React, { Component } from 'react';

class Search extends Component {
  state = {}
  render() {
    return (
      <div id="searchInput">
        <span id="search">
          <input type="text" className="search" placeholder="搜索用户、星球或内容" />
        </span>
      </div>
    );
  }
}

export default Search;