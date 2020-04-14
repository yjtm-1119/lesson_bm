- 大型项目注释写法
- 递归算法  可以优化
    n阶楼梯走法，fn=f(n-1)+f(n-2) 
    1. 递归的核心除了大问题划分成n个相似的小问题 递过去 再回溯  解决 
    2. 一定要有退出条件
    3. 


prepre   pre   ret
a         b     c
c=a+b  ret=pre+prepre
a=b    prepre = pre;
b=c    pre = ret;