var findCircleNum = function (M) {
  var res = M.length;
  for (i = 0; i < M.length; i++) {
    if (M[i][i + 1] == 1 || M[i + 1][i] == 1) {
      res--
      continue;
    }
  }
  return res
};
console.log(findCircleNum([[1, 1, 0],
[1, 1, 1],
[0, 1, 1]]))

[
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1]
]