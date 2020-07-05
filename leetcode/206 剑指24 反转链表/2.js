var reverseList = function (head) {
  if (!head || !head.next) return head
  let next = head.next;//next 结点，反转后是最后一个结点
  let reverseHead = reverseList(next)
  head.next = null
  next.next = head
  return reverseHead
}