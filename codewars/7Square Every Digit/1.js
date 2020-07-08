function squareDigits(num) { 
  return num.toString().split('').map(i => i * i).join('');
}

console.log(squareDigits(9119))