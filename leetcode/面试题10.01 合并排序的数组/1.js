var merge = function (A, m, B, n) {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (A[i] >= B[j]) {
      A[k] = A[i]
      k--
      i--
    } else {
      A[k] = B[j]
      k--
      j--
    }
    while (j >= 0) {
      A[k] = B[j]
      k--
      j--
    }
  }
  return A
};