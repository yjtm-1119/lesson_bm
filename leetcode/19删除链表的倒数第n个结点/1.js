const removeNthFromEnd = function (head, n) {
  // 初始化dummy结点
  const dummy = new ListNode()
  //dummy 指向头结点
  dummy.next = head
  //初始化快慢指针，均指向dummy
  let fast = dummy
  let slow = dummy
  //快指针先走n步
  while (n !== 0) {
    fast = fast.next
    n--
  }
  //此时再快慢指针一起走
  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}