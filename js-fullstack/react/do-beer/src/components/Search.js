import React from "react";
import PropTypes from "prop-types";

// StatefullComponent  StatelessComponent
//Main.js  ->
class Search extends React.Component {
  static contextTypes = {
    router:PropTypes.object.isRequired
  }
  //publci  属性   react  不能做dom 的查询
  searchRef = React.createRef();
  handleSubmit=(e)=> {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;
    console.log(this, '----------------------');
    this.context.router.history.push(`/search/${searchTerm}`);
    //浏览器输入一个地址就是一个入栈的过程
  }
  render() {
    console.log(this.searchRef);
    
    return (
      //表单
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.searchRef} placeholder="Hoppy, Malt, Angry, New..."/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default Search;