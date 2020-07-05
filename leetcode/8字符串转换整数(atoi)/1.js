// /\s*([-\+]?[0-9]*).*/
const myAtio = function (str) {
  const reg = /\s*([-\+]?[0-9]*).*/

  const groups = str.match(reg)
  console.log(groups)
  const max = Math.pow(2, 32) - 1;
  const min = -max - 1
  let targetNum = 0;
  if (groups) {
    targetNum = groups[1]
    if (isNaN(targetNum)) {
      targetNum = 0
    }
  }
  if (targetNum > max) {
    return max
  } else if (targetNum < min) {
    return min
  }
  return targetNum
}
console.log(myAtio("    words and 987"))