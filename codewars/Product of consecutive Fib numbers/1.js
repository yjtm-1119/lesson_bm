function productFib(prod) {
  var getFib = function (N) {
    if (N == 0) return 0;
    if (N == 2 || N == 1) return 1;
    var prev = 1, curr = 1;
    for (var i = 3; i <= N; i++) {
      var sum = prev + curr;
      prev = curr;
      curr = sum;
    }
    return curr;
  };
  for (let i = 0; i < 1000000; i++) {
    if (getFib(i) * getFib(i + 1) >= prod) {
      let [res1, res2] = [getFib(i), getFib(i + 1)]
      if (getFib(i) * getFib(i + 1) === prod) {
        return [res1, res2, true]
      } else {
        return [res1, res2, false]
      }
    }
  }
}
console.log(productFib(800))