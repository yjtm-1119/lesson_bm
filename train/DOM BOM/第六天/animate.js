function animate(obj, target,callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // var step = Math.ceil((target -obj.offsetLeft)/10);
        var step = (target - obj.offsetLeft) / 10;
        //此时要判断step是正值还是负值 正值时要往大了取，负值时要往小了取
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if(callback){
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}