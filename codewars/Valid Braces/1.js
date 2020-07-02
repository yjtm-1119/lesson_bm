function validBraces(braces) {
  const arr = braces.split('');
  // console.log(arr);
  const len = arr.lenth;
  if (len % 2 === 1) return false
  else for (let i = 0; i < len / 2; i++){
    if (!(arr[i] + arr[len - 1 - i]) === '()'
      || (arr[i] + arr[len - 1 - i]) === '[]'
      || (arr[i] + arr[len - 1 - i]) === '{}') {
      return false;
    } else {
      return true;
    }
  }
}
validBraces("[(])");

