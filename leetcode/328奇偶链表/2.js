var oddEvenList = function(head) {
  if (!head || !head.next) return head;
const dummyHead1 = { //哨兵结点 指向第一个奇结点
  next: head
}
const dummyHead2 = {//指向第一个偶结点
  next: head.next
}
let odd = dummyHead1.next;
let even = dummyHead2.next;
while (odd && odd.next && even && even.next) {  //遍历 获取下一个结点 改变指向 改变开始结点
  const oddNext = odd.next.next;
  const evenNext = even.next.next;
  odd.next = oddNext;
  even.next = evenNext

  odd = oddNext;
  even = evenNext;
}
// 连接
odd.next = dummyHead2.next;
return dummyHead1.next;
};