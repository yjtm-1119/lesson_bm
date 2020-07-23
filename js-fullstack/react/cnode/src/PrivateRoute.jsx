import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authStore from './store/auth';

{/* <PrivateRoute path="/collect" component={Collect} /> */ }

function PrivateRoute(props) {
  const isLogin = authStore.isLogin;
  const { path, component } = props;
  if (!islogin) {
    return <Redirect to="/login" />
  }
  return (
    <Route path={} component={} />
  )
}

export default PrivateRoute;