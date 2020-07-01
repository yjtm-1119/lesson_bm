function move_zeros(arrNum, isRight) {
  let newArr1 = arrNum.filter(num => num > 0);
  let newArr2 = arrNum.filter(num => num === 0);
  return isRight == false ? newArr2.concat(newArr1) : newArr1.concat(newArr2);
}
console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]));