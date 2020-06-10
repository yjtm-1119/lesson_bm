import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import "./i18n";

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* 国际化的登录页   login 登录 */}
      <Route exact={true} path="/" component={LoginPage} />
    </Switch>
  </HashRouter>
  ,
  document.getElementById('root')
)