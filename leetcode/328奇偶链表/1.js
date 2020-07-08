//稀疏数组
//[1,2,3,4,5,,6]
// let node = {
//   val: 1,

// }
// let node2 = {
//   val: 2
// }
// let node3 = {
//   val: 3
// }
// let current = node;
// node.next = node2;
// node2.next = node3;
// while (current) {
//   console.log(current.val);
//   current = current.next;
// }
// console.log(node)

var oddEvenList = function (head) {
  if (!head || !head.next) return head;
  const dummy1 = {next: head}
  const dummy2 = {next: head.next}
  let odd = dummy1.next;
  let even = dummy2.next;
  let list = new ListNode(null);
  while (odd || odd.next.next) {
    list.next = odd;  
    odd = odd.next.next;
  }
  while (even || even.next.next) {
    list.next = even;
    even=even.next.next
  }
  while (!odd && !even) {
    list.next = null;
  }
  return list.next
};
console.log(oddEvenList([1,2,3,4,5]))