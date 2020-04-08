//js es6 class 关键字 面向对象语言
const UUID = require('uuid')//引入第三方库
class Wallet {
    //属性方法组成
    constructor() {
        //console.log('欢迎使用支付宝钱包');
        //
        //1.唯一id  autoincremnet  Node ,绝对不会重复
        this._id = UUID.v1().replace(/-/g,"");//命名规则约定 _变量  （下划线加变量名）表示私有 
        this._createTime = + new Date();//类型转换  转换成时间戳
        this._balance = 0; //余额也设计成私有属性  虽然可以读写 但要遵循一定的规则  要安全
        this._time
        //余额
        //如何生成？
        //console.log(this.id);//id 是zzwWallet 的public 属性
        
    }
    getBalance() {
        return this._balance;
    }
    // setBalance() {
        
    // }
    increaseBalance(increasedAmount) {
        console.log('多了'+ increasedAmount);
        this._balance += increasedAmount 
    }
    decreaseBalance(decreaseAmount) {
        console.log('少了'+decreaseAmount);
        this._balance -= decreaseAmount;
    }
    getCreateTime() {   //public
        return this._createTime;
    }
    getID() {
        return this._id;
    }
    setID() {
        throw new Error('私有属性_id 不可以修改');
    }
}

const zzwWallet = new Wallet();//实例化
console.log(zzwWallet.getCreateTime());
console.log(zzwWallet.getBalance());
zzwWallet.increaseBalance(10.0);
zzwWallet.decreaseBalance(8.1);
console.log(zzwWallet.getBalance());


console.log(zzwWallet.getID());
//zzwWallet.setID();
// zzwWallet.id = '123412412';//id 属性应该是只读的 不能修改
// console.log(zzwWallet.id);
