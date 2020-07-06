// function zero() { if (arguments[0]) { return calc(0, arguments[0]); } return 0; }
// function one() { if (arguments[0]) { return calc(1, arguments[0]); } return 1; }
// function two() { if (arguments[0]) { return calc(2, arguments[0]); } return 2; }
// function three() { if (arguments[0]) { return calc(3, arguments[0]); } return 3; }
// function four() { if (arguments[0]) { return calc(4, arguments[0]); } return 4; }
// function five() { if (arguments[0]) { return calc(5, arguments[0]); } return 5; }
// function six() { if (arguments[0]) { return calc(6, arguments[0]); } return 6; }
// function seven() { if (arguments[0]) { return calc(7, arguments[0]); } return 7; }
// function eight() { if (arguments[0]) { return calc(8, arguments[0]); } return 8; }
// function nine() { if (arguments[0]) { return calc(9, arguments[0]); } return 9; }

['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  .forEach((num, index) => {
  return (
    this[num] = () => {
      if (arguments[0]) { return calc(index, arguments[0]); } return index;
    }
  )
})


function plus() { return "+" + arguments[0].toString(); }
function minus() { return "-" + arguments[0].toString(); }
function times() { return "*" + arguments[0].toString(); }
function dividedBy() { return "/" + arguments[0].toString(); }
function calc(n1, argN2) {
  if (argN2.match(/\+/)) {
    return Number(n1) + Number(argN2.slice(1));
  } else if (argN2.match(/\-/)) {
    return n1 - argN2.slice(1);
  } else if (argN2.match(/\*/)) {
    return n1 * argN2.slice(1);
  } else if (argN2.match(/\//)) {
    return (n1 - (n1 % argN2.slice(1))) / argN2.slice(1);
  }
}

//seven(times(five())
// arguments[0] times(five())  * 5
function zero() { if (arguments[0]) { return calc(0, arguments[0]) } return 0 }
function times() { return '*' + arguments[0].toString() }
function calc(n1, argN2) {
  if (argN2.match(/\*/)) {
    return n1 * argN2.slice(1);
  }
}
console.log(seven(times(five())))