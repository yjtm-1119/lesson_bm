import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import List from './List';
import Chart from './Chart';
import HomerHeader from './HomeHeader'
// <> 空标签也是一个组件  React.fragment
class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <HomerHeader />
                <br/>
                <Link to="/list">列表页面</Link>
                <br/>
                <Link to="/chart">图表页面</Link>
                {/* {this.props.children} */}
                <br />
                {/* <List path="/" component={List} /> */}
                {/* <List path="/list" component={List} />
                <Chart path="/chart" component={Chart} /> */}
            </React.Fragment>
        )
    }
}
export default Index