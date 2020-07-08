var levelOrder = function(root) {
  if(root===null)return [];
let queue = [ root ];
// let queue = [ root.left, root.right ];  // 假设处于第二层 也能够把第三层 追加到队尾
let res = [];
while(queue.length) {
  // 上一层的元素都出队列
  let rowNodes = queue.splice(0);
  // 下一层的元素 拿到上一层的所有元素 遍历上一层所有有元素，取出所有 .left .right
  for (let node of rowNodes) {
    res.push(node.val);
    // 假设 既没有没有 left right 二叉树的最底下这层 queue.length === 0
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}
return res;
}