const Service = require('egg').Service

class UserService extends Service {
    async register() {
        const { ctx } = this;
        ctx.body = {
            msg: '注册成功',
            user_id: 10001
        }
    }
}


module.exports = UserService