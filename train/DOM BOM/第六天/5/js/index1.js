window.addEventListener('load', function () {
    //.1获取元素
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    var num = 0;
    var circle = 0;
    //2.鼠标经过focus就显示和隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null;//清楚定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function () {
            arrowr.click();
        }, 2000);
    })
    //3.动态生成小圆圈 根据图片数量生成小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    //console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个li
        var li = document.createElement('li');
        //记录当前小圆圈的索引号 通过自定义属性来做
        li.setAttribute('index', i);
        //把li插入到ol里面
        ol.appendChild(li);
        //4.小圆圈的排他思想，可以直接再生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            for (i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //5.点击小圆圈，移动图片 ，移动的是 ul  ul移动带着里面的li移动
            //ul 的移动距离 等于小圆圈的索引号乘以图片的宽度
            var index = this.getAttribute('index');
            //当我们点击了某个小li,就要把这个li的索引号给num
            num = index;
            //当我们点击了某个小li,就要把这个li的索引号给circle
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    //克隆第一张图片(li)放到ul最后面
    //6.克隆第一张图片要在生成小圆圈之后，这样根据图片生成的小圆圈才会比真正的图片数少1
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮 图片滚动一张
    var flag = true;
    //circle 用于控制小圆圈的播放
    arrowr.addEventListener('click', function () {
        if (flag) {
            flag = false;//关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;//打开节流阀
            });
            //回调函数其实就是在定时器事件结束后要做的事情
            //点击右侧按钮，小圆圈跟随一起变化，再声明一个变量控制小圆圈的播放
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    });
    //左侧按钮
    arrowl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            //点击右侧按钮，小圆圈跟随一起变化，再声明一个变量控制小圆圈的播放
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length - 1;
            // }
            circle = circle < 0 ? (ol.children.length - 1) : circle;
            circleChange();
        }

    });
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
        //console.log(num);
    };
    //自动播放轮播图  利用了手动调用点击事件，因为这个自动播放的功能和点击右侧按钮获得的效果一样，所以可以通过手动调用点击事件，自己调用一个点击事件
    var timer = setInterval(function () {
        arrowr.click();
    }, 2000);

})