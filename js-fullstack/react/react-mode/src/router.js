import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notification from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import FormLogin from './pages/ui/login'
import FormRegister from './pages/ui/register'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import BasicTable from './pages/table/basicTable'
import HightTable from './pages/table/hightTable'
import Rich from './pages/rich/index'
import City from './pages/city/index'
import Order from './pages/order/index'
import User from './pages/user/index'
import Permission from './pages/permission/index'
import BikeMap from './pages/map/bikeMap'
import Bar from './pages/echarts/bar/index'
import Pie from './pages/echarts/pie/index'
import Line from './pages/echarts/line/index'
import Login from './components/login/index'
import NoMatch from './pages/nomatch/index';
import Home from './page/home/index'
// 通用组件
import Common from './common'
import OrderDetail from './pages/order/detail'
import { notification } from 'antd';

export default class IRouter extends React.Component{

  render() {
    return(
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/common" render={() => 
            <Common>
              <Route patch="/common/order/detail/:orderId" component={OrderDetail}/>
            </Common>
          }
          />
            {/* <Admin>
              <Route path="/" component={Home}/>
            </Admin> */}
            <Route path="/" render={() => 
              <Admin>
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/ui/buttons" component={Buttons}/>
                  <Route path="/ui/modals" component={Modals}/>
                  <Route path="/ui/loadings" component={Loadings}/>
                  <Route path="/ui/notification" component={Notification}/>
                  <Route path="/ui/messages" component={Messages}/>
                  <Route path="/ui/tabs" component={Tabs}/>
                  <Route path="/ui/gallery" component={Gallery}/>
                  <Route path="/ui/carousel" component={Carousel}/>
                  <Route path="/form/login" component={FormLogin}/>
                  <Route path="/form/reg" component={FormRegister}/>
                  <Route path="/table/basic" component={BasicTable}/>
                  <Route path="/rich" component={Rich}/>
                  <Route path="/table/high" component={HightTable}/>
                  <Route path="/city" component={City}/>
                  <Route path="/order" component={Order}/>
                  <Route path="/user" component={User}/>
                  <Route path="/bikeMap" component={BikeMap}/>
                  <Route path="/charts/bar" component={Bar}/>
                  <Route path="/charts/pie" component={Pie}/>
                  <Route path="/charts/line" component={Line}/>
                  <Route path="/permission" component={Permission}/>
                  {/* 重定向 */}
                  <Redirect to="/home"/>
                  <Route component={NoMatch}></Route>
                </Switch>
              </Admin>
            }/>
          </Switch>
        </App>
      </HashRouter>
    )
  }
}