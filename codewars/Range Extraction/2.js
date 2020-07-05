function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] === -1) j++
    if (j - i > 1) list.splice(i,j-i+1,list[i]+'-'+list[j])
  }
  return list.join();
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))