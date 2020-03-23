var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.init();
    }
    init() {
        // init 初始化操作让相关的元素绑定事件

        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
        this.add.onclick = this.addTab;
    }
    //1.切换功能
    toggleTab() {
        //因为toggleTab是由lis[i].onclick调用的 ，所以函数里面的this都是指向lis的   
        //console.log(this.index);
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //2.添加功能
    addTab() {
        //(1)创建li元素和section元素
        var li = '<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '';
        //(2)把这两个元素追加
        that.ul.insertAdjacentHTML('beforeend', li);
    }
    //3.删除功能
    deleteTab() {

    }
    //4.修改功能
    editTab() {

    }
}
new Tab('#tab');