import React from "react";
// StatefullComponent  StatelessComponent
import Search from "./Search";
import Results from "./Results";


class Main extends React.Component {
  // 集列表， 搜索于一体 怎么做？ 
  constructor() {
    super();
    this.state = {
      beers: [],
      loading: true // 正在加载中  体验
    }
  }

  // URL不一样？ 分析URL不一样
  componentDidMount() {
    // /  把所有啤酒都查出来， 
    // /search/:searchTerm   就查searchTerm
    // const \
    console.log(this.props.match.params);
    const params = this.props.match.params || {} // 
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm); // 
  }
  // = hops 在业务上有什么用？
  // es6 概念 默认赋值
  loadBeers(searchTerm = "hops") {

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) // api 地址
      .then(data => data.json())
      .then(data => {

        const beers = data.data || [];
        this.setState({
          loading: false,
          beers
        });
        console.log(data)
      })
  }


  render() {
    return (
      <div>
        <Search />
        {/* 搜索组件 */}
        <Results beers={this.state.beers}
          loading={this.state.loading} />
      </div>
    )
  }
}


export default Main