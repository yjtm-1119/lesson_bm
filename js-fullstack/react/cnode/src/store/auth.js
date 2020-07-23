import { observable, action } from 'mobx';
class Auth {
  @observable isLogin = false//没有和页面绑定在一起
  @action
  login() {
    this.isLogin = true
  }
  logout() {
    this.isLogin = false;
  }
}
export default new Auth();