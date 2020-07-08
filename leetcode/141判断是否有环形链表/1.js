var hasCycle = function (head) {
  //头结点存在 那么就继续遍历
  while (head) {
    //如果 flag标志立过了,那么说明成环
    if (head.flag) {
      return true
    } else {
      //如果flag 没立过  就立一个flag 再往下走
      head.flag = true
      head = head.next
    }
  }
  return false
};