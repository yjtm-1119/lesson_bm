import React from "react";
// StatefullComponent  StatelessComponent
import Search from "./Search";
import Header from "./Header";
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

  componentDidUpdate(prevProps) {
    // console.log('did update')
    // console.log(prevProps);
    const currentSearchTerm = this.props.match.params.searchTerm; // 新的参数
    const oldSearchTerm = prevProps.match.params.searchTerm;
    // console.log(oldSearchTerm, currentSearchTerm);
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeers(currentSearchTerm)
    }
  }

  // = hops 在业务上有什么用？
  // es6 概念 默认赋值
  loadBeers(searchTerm = "hops") {
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`)
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({
        beers: localBeers,
        loading: false
      })
      return;
    }
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`) // api 地址
      .then(data => data.json())
      .then(data => {

        const beers = data.data || [];

        this.setState({
          loading: false,
          beers
        });
        // 业务
        // 列表记录相关 searchTerm 变化
        localStorage.setItem(
          `search-${searchTerm}`,
          JSON.stringify(this.state.beers)
        )
        console.log(data)
      })
  }

  render() {
    return (
      <div>
        <Header siteName="Beer me!" />
        <Search />
        {/* 搜索组件 */}
        <Results beers={this.state.beers}
          loading={this.state.loading} />
      </div>
    )
  }
}

export default Main