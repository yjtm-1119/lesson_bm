function findOutlier(integers) {
  // var odd = []; var even = [];
  // integers.forEach((ele,i) => {
  //   if (integers[i] % 2 == 0) {
  //     even.push(integers[i]);
  //   } else { odd.push(integers[i]); }
  // })
  // if (even.length ==1)  return even.pop() 
  //   else  return odd.pop(); 
  var odd = integers.filter(ele => ele % 2 !== 0);
  var even = integers.filter(ele => ele % 2 === 0);
  return odd.length === 1 ? Number(odd) : Number(even);
}
console.log(findOutlier([1, 3, 5, 10]));