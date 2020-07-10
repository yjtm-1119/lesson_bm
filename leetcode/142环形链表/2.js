//快慢指针

var detectCycle = function (head) {
  let slowP = head, fastP = head//都从头节点出发
  while (fastP) {//head 为null 没有入环点 直接返回null
    if (fastP.next == null) return null//fastP.next为null也说明无环
    slowP = slowP.next;//慢指针走一步
    fastP = fastP.next.next;//快指针走两步
    if (slowP == fastP) {//首次相遇
      fastP = head//让快指针回到头结点
      while (true) {//开启循环 ，让快慢指针相遇
        if (slowP == fastP) {//此时相遇了  地点在入环处
          return slowP //返回此时指针的位置
        }
        fastP = fastP.next;//快慢指针都只走一步
        slowP = slowP.next;
      }
    }
  }
  return null
}