function findOdd(arr) {
  var res = 0;
  var arr2 = []
  arr.map(val => {
    if (!arr2.includes(val)) arr2.push(val);
  })
  arr2.map(val => {
    if (findIndex(arr, val) % 2 === 1) {
      res = val
    }
  })
  return res
}
function findIndex(arr, value) {
  var count = 0;
  arr.map(val => {
    if (val === value) {
      count++
    }
  })
  return count
}
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))