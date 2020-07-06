// var addTwoNumbers = function(l1, l2) {
//   let result = new ListNode(null);
//   let nextRst = result;
//   // 进位
//   let params = 0 // 传给下一个层级的值
//   let val = 0 // 传给当前层级的值
//   while(l1 != null || l2 != null) {
//       let x = (l1 != null) ? l1.val : 0;
//       let y = (l2 != null) ? l2.val : 0;
//       val = (x + y + params) % 10;
//       params = Math.floor((x + y + params) / 10);
//       nextRst.next = new ListNode(val) 
//       nextRst = nextRst.next
//       if(l1 != null) l1 = l1.next
//       if(l2 != null) l2 = l2.next        
//   }
//   if(params) {
//      nextRst.next = new ListNode(params)
//   }
//   return result.next
// };
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// var addTwoNumbers = function(l1, l2) {
//   let node = new ListNode('head')
//   let temp = node , sum , n = 0
//   while( l1 || l2 ){
//       const n1 = l1 ? l1.val : 0
//       const n2 = l2 ? l2.val : 0
//       sum = n1 + n2 + n
//       temp.next = new ListNode( sum % 10 )
//       temp = temp.next
//       n = parseInt( sum / 10 )
//       if(l1) l1 = l1.next
//       if(l2) l2 = l2.next
//   }
//   if( n > 0 ) temp.next = new ListNode(n)
//   return node.next
// };



var addTwoNumbers = function (l1, l2) {
  var node = new ListNode('head');
  let temp = node;
  let sum = 0,//链表同列之和
    n = 0//下一列是否需要进位
  while (l1 || l2) {//判断链表l1或l2有值
    const n1 = l1 ? l1.val : 0;//有值取值 无值赋0
    const n2 = l2 ? l2.val : 0;
    sum = n1 + n2 + n;//为什么这里+n?
    temp.next = new ListNode(sum % 10);//把去进位后的和赋给新链表
    temp = temp.next//链表前进
    n = Math.floor(sum / 10);
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (n > 0) temp.next = new ListNode(n)//?
  return node.next
};