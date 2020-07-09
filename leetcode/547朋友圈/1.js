function findOdd(arr) {
  return arr.find((item) => arr.filter(el => el == item).length % 2)
}
[5,4,3,2,1,5,4,3,2,10,10]