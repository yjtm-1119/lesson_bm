function check(str1) {
  return str1.length > 4 ? str1.split('').reverse().join('') : str1
}

console.log(check('het'))