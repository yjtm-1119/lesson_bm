function a(age) {
  console.log(age);
  var age = 20;
  console.log(age);
  age = function () {
  }
  console.log(age)
}
a(18)