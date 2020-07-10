function digital_root(n) {
  var digit = n.toString().length;
  if (digit > 1) {
    var sum = n.toString().split('').reduce((pre, cur) => (+pre) + (+cur))
    return digital_root(sum)
  }
  return n
}