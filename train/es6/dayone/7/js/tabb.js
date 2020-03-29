// var that;
class Tab {
    constructor(id) {
        //that = this;
        this.main = document.querySelector(id);
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.firstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.updateNode();
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab.bind(this.add,this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);
            this.delete[i].onclick = this.deleteTab.bind(this.delete[i],this);
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick =this.editTab;
        }


    }
    //动态获取新增的元素    
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.delete = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child');
    }
    //1.切换功能
    toggleTab(that) {
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
    addTab(that) {
        that.clearClass();
        //(1)创建li元素和section元素
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试' + random + '</section>';
        //(2)把这两个元素追加
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    //3.删除功能
    deleteTab(that,e) {
        e.stopPropagation();//阻止冒泡，防止触发li的切换点击事件
        var index = this.parentNode.index;
        //console.log(index);
        that.lis[index].remove();//remove方法可以直接删除指定的元素
        that.sections[index].remove();
        that.init();
        //当删除的不是选定状态的li的时候，原来的li选定状态保持不变
        if (document.querySelector('.liactive')) return;
        //这句话的意思是如果有li已经处于选定状态，则return return后面的代码不会执行
        //当删除了选定状态的li的时候，让他的前一个li处于选定状态
        index--;
        that.lis[index] && that.lis[index].click();
        //判断前面为真再执行后面的调用,为假则不调用
        //callback() && callback()
    }
    //4.修改功能
    editTab() {
        var str = this.innerHTML;
        //双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        //alert(11);
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select();//让文本框里的文字处于选定状态
        input.onblur = function () {
            input.parentNode.innerHTML = this.value;
        };
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                //keyCode 中C一定要大写
                //手动调用表单失去焦点事件,不需要鼠标离开操作
                this.blur();
            }
        }

    }
}
new Tab('#tab');