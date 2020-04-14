function f(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    let ret = 0,
        pre = 2,
        prepre = 1;

    //递归都可以优化成循环
    for (i = 3; i <= n; i++) {
        ret = pre + prepre;
        prepre = pre;
        pre = ret;
    }
    return ret;
}
console.log(f(30));
