const reverseBetween = function (head, m, n) {
  //定义pre cur 用leftHead来承接整个区间的前驱结点
  let pre, cur,leftHead
  const dummy = new ListNode()
  //dummy后继结点是头结点
  dummy.next = head
  //p 是一个游标，用于遍历 最初指向dummy
  let p = dummy
  //p往前走m-1步 走到整个区间的前驱结点处
  for (let i = 0; i < m - 1; i++) {
    p = p.next
  }
  //缓存这个前驱结点到leftHead 里
  leftHead = p
  //start 是反转区间里的第一个结点
  let start = leftHead.next
  //pre 指向start
  pre = start
  //cur 指向start的下一个结点
  cur = pre.next
  //开始重复反转动作
  for (let i = m; i < n; i++) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  //leftHead的后继结点此时为反转后的区间的第一个结点
  leftHead.next = pre
  //将区间内反转的最后一个结点next 指向cur
  start.next = cur
  //dummy.next永远指向链表的头结点
  return dummy.next
}