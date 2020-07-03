let arr = [1, 4, 55, 2, 5, 36];
function bubbing(arr) {
  // let max = arr[0];
  // let t = null;
  for (var i = 0; i < arr.length ; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr
}
// bubbing(arr)
console.log(bubbing(arr));