import React from 'react';

class SearchCom extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:"",
            result:null
        }
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="请输入查询的省份" onKeyDown={this.searchEvent} value={this.state.value} onChange={this.changeEvent} />
                <div>
                    <h2>查询结果：</h2>
                    <div>
                        {this.state.result}
                    </div>
                </div>
            </div>
        )
    }
    searchEvent=(e)=>{
        
        if(e.keyCode===13){
            console.log(e.keyCode)//当keycode是回车的时候在进行执行查询
            console.log(e.target.value)
            console.log(this.props.provincesObj[e.target.value])
            if(this.props.provincesObj[e.target.value]===undefined){
                this.setState({
                    result:<h2>输入错误，不是省份。请输入正确的省份</h2>
                })
               
            }else{
                this.setState({
                    result:(
                        <div>
                            <div>确诊人数：{this.props.provincesObj[e.target.value].confirm}</div>
                            <div>死亡人数：{this.props.provincesObj[e.target.value].dead}</div>
                            <div>治愈人数：{this.props.provincesObj[e.target.value].heal}</div>
                        </div>
                    )
                })
               
            }
            
        }        
    }
    changeEvent=(e)=>{
        this.setState({
            value:e.target.value
        })
    }
}


export default SearchCom