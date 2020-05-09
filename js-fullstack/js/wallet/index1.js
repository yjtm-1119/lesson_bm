// js es6 class 关键字 面向对象语言
const UUID = require('uuid'); //引入第三方库
class Wallet {
    // 属性和方法组成
    constructor() {
        this._id = UUID.v1().replace("-", "");//命名规则约定 _变量 私有
        //创建时间 不能改
        this._createTime = new Date(); // 类型转换
        // 余 额 如何设计？
        this._balance = 0; //余额 设计成私有的属性 规则 安全

        //创建修改时间
        this._modifyTime = new Date();

        //console.log(this.id); //如何生成？
        // 构造函数里声明
        //console.log('欢迎使用支付宝钱包');
        // 设计支付宝用的钱包，几十亿人都在用
        // 数字货币
        //1. 唯一 id.autoincrement Node ,绝对不会重复
    }
    getBalance() {
        return this._balance;
    }

    // setBalance() {

    // }
    increaseBalance(increasedAmount) { //
        console.log('多了' + increasedAmount);
        this._balance += increasedAmount;
        console.log('修改余额时间：' + zzwWallet.getModifyTime());
        console.log('当前余额：' + zzwWallet.getBalance().toFixed(2));
    }

    decreaseBalance(decreasedAmount) {
        console.log('少了' + decreasedAmount);
        this._balance -= decreasedAmount;
        console.log('修改余额时间：' + zzwWallet.getModifyTime());
        console.log('当前余额：' + zzwWallet.getBalance().toFixed(2));
    }
    getId() {
        return this._id;
    }

    setId() {
        throw new Error('私有属性_id 不可以修改');
    }

    getCreateTime() { //public
        return this._createTime;
    }

    getModifyTime() {
        return this._modifyTime;
    }
}

const zzwWallet = new Wallet(); //实例化
//console.log(zzwWallet.getId());
//console.log(zzwWallet.setId());
console.log(zzwWallet.getCreateTime());
console.log('当前余额：' + zzwWallet.getBalance().toFixed(2));
//zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
//console.log(zzwWallet.getBalance().toFixed(2));
//zzwWallet.id = '111';// id属性只读，但不能修改
//console.log(zzwWallet.id);// id是zzwWallet的public属性
//获取当前余额
//console.log('当前余额：' + zzwWallet.getBalance().toFixed(2));
//zzwWallet.increaseBalance(2.5);