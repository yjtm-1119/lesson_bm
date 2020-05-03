window.onload = function () {
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function (link) {
        console.log(link);
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // 1. 取消之前的类名  添加类名 来添加下划线
            // 2. 点了哪个a就加selected类名
            document.querySelector('.selected').classList.remove('selected');
            this.classList.add('selected');
        }, false);
    })
    //XMLHttpRequest http
    fetch('http://localhost:3000/banner')
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
}


// 先拿到swiper 的数据  
// banner 里面的数据 