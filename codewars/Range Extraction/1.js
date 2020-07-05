function solution(list) {
  var flag = 0
  var arr = []
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 !== list[i + 1]) {
      if (flag === 0) {
        arr.push(list[i])
      } if (flag === 1) {
        arr.push(list[i - 1])
        arr.push(list[i])
        flag = 0
      } if (flag > 1) {
        arr.push(list[i - flag] + "-" + list[i])
        flag = 0
      }
    } else {
      flag++
    }
  }
  return arr.join()
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))