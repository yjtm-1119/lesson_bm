nums2 = [1, 2, 3, 0, 0, 0], n = 3
nums1 = [4, 5, 6,7,8,9], m = 6
const merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]//nums1[8]=nums1[5]...nums1[3]=nums1[0]
      i--
      k--
    } else {
      nums1[k] = nums2[j]//nums1[8]=nums2[5]
      //nums1[7]=nums2[4]  nums1[6]=nums2[3] nums1[5]=nums2[2] nums1[4]=nums2[1]
      //nums1[3]=nums2[0]

      j--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    k--
    j--
  }
  return nums1
};
console.log(merge(nums1, m, nums2, n))