import React from 'react';
import Hot from './Hot';
import HotList from './HotList';
import Newest from './Newest'

class App extends React.Component {
    constructor() {
        super()
        //设置状态 数据
        this.state = {
            contentHot: "content display",
            contentHostList: "content",
            contentNewest: "content"
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Hot data-index="1" onClick={this.clickEvent.bind(this)} />
                <HotList data-index="2" onClick={this.clickEvent.bind(this)} />
                <Newest data-index="3" onClick={this.clickEvent.bind(this)} />
            </div>
        )
    }
    clickEvent(e) {
        console.log('调用了clickEvent');
        console.log(e.target.dataset.index);
        let index = e.target.dataset.index;
        console.log(this);

        if (index == "1") {
            this.setState({
                contentHot: "content display",
                contentHostList: "content",
                contentNewest: "content"
            })
        } else if (index == "2") {
            this.setState({
                contentHot: "content ",
                contentHostList: "content display",
                contentNewest: "content"
            })
        } else{
            this.setState({
                contentHot: "content ",
                contentHostList: "content",
                contentNewest: "content display"
            })
        }
    }
}

export default App