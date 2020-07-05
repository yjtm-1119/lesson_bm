const reverseList = function (head) {
  // 初始化前驱结点为null
  let pre = null
  //初始化目标结点为头结点
  let cur = head;
  //只要目标结点部位null,遍历就得继续
  while (cur !== null) {
    //记录一下next结点
    let temp = cur.next;
    //反转指针
    cur.next = pre;
    //pre 往前走一步
    pre = cur;
    //cur往前走一步
    cur = temp;
  }
  //反转结束后，pre 变成新链表的头结点
  return pre
}