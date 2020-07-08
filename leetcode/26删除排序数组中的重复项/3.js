var removeDuplicates = function (nums) {
    let n = nums.length
    nums.forEach(function (item, index) {
        let i = index + 1
        while (i < n) {
            if (item === nums[i]) {
                nums.splice(i, 1);
                n = n - 1;
            }
            i++;
        }
    });
    console.log(nums);
    return n;
};


console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5]));
