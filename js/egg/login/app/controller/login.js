const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    //异步 存一条数据
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    await ctx.service.user.register({ password, username, email });
    //   service  负责数据存储业务
    //ctx.body = 'hi, egg';
  }

  async  loginIn() {
    const { ctx } = this;
    console.log(ctx.request.body);
    // 用户名  密码 ctx  req res
    const { email, password } = ctx.request.body
    console.log(email, password);
    ctx.body = '登录成功'
  }
}

module.exports = LoginController;