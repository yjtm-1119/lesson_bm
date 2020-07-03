//不用四则运算算出两数之和

// function sum(a, b) {
//   if (a !== b) return a^b
//   else return (a&b)<<1
// }
// console.log(sum(7, 8));

function sum(a, b) {
  if (a === 0) return b
  if (b === 0) return a
  let newA = a ^ b
  let newB = (a & b) << 1
  return sum(newA, newB);
}
console.log(sum(7,5))