var deleteDuplicates = function(head) {
  var cur = head;
  while(cur && cur.next) {
      if(cur.val == cur.next.val) {
          cur.next = cur.next.next;
      } else {
          cur = cur.next;
      }
  }
  return head;
};