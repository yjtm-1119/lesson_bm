var f = function (nums) {
    var count = 0;//计数器用于计算相邻元素重复次数
    var a = function (x, y) {
        if (nums[x] == nums[y]) {
            count++;
            a(x + 1, y + 1)
        } else
            return 
    }
    for (let i = 1; i < nums.length; i++) {
        a(i, i - 1);
        nums.splice(i, count);//找到并删除元素
        count = 0;//count要归零
    }
    //console.log(nums);
    console.log(nums);
    return nums.length;
};
console.log(f([0, 1, 1, 1, 2, 3, 4, 4, 4, 4, 6]));
//console.log(f([0,0,0, 1, 2, 3, 4, 4, 4, 4, 6]));




// if (nums[i] == nums[i - 1]) {
        //     count++;
        //     if (nums[i + 1] == nums[i]) {
        //         count++;
        //         nums.splice(i, count);
        //     }
        //     count = 0;
        //     // count++;
        //     // nums.splice(i, count);
        // }

