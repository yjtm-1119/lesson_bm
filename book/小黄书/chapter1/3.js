// LHS  RHS  变量查找  就在那一行相关

function foo(a) {//LHS 
  var b = a;//LHS  RHS
  return a + b;//RhS
}
var c = foo(2); //LHS

