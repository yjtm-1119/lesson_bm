function spinWords(str) {
  if (!str.includes(' ')) {
    return str.length > 4 ? str.split('').reverse().join('') : str
  } else {
    str.split(' ').reduce((pre, cur) => {
      return check(pre) + check(cur) + ' '
    },'');
  }
}
function check(str1) {
  if (!str1.includes(' ')) {
    return str1.length > 4 ? str1.split('').reverse().join('') : str1
  }
}
let str2 = "Hey wollef sroirraw"
console.log(spinWords(str2))
// console.log(str1.split(' '))