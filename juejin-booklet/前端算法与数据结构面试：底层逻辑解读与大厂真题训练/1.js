// 创建链表结点 需要一个构造函数
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 使用构造函数创建结点时，传入val(数据域对应的值内容), 指定next(下一个链表结点)即可：
const node = new NodeList(1);
node.next = new NodeList(2);
// 这样 就创建出了一个数据域值为1，next 结点数据值为2的链表结点


//在任意两个结点之间插入一个新结点
//其本质就是在变更前驱结点和目标结点的next 指向
const nodee = new ListNode(3);//手动添加一个目标结点
node3.next = node1.next;//将node3的next指针指向node2
node1.next = node3;  //把node1的next指针指向node3

//链表与数组的优点  链表的插入/删除效率高  访问效率低  数组的访问效率低 插入删除效率高


const root = {
  val: 'a',
  left: {
    val: 'b',
    left={
      val: 'd'
    },
    right={
      val: 'e'
    }
  },
  right: {
    val: 'c',
    right: {
      val: 'f'
    }
  }
}