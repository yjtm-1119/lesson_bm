let tree = {
    val: 'f',
    left: {
        val: 'c',
        left: {
            val: 'a'
        },
        right: {
            val: 'd'
        }
    },
    right: {
        val: 'e',
        left: {
            val: 'h'
        },
        right: {
            val: 'g'
        }
    }
}
var preorderTraversal = function (root) {
    let arr = [];
    function helper(node) {
        if (node) {
            let val = node.val;
            arr.push(val);
            helper(node.left);
            //遇到左子树了  也要 root  left  right 顺序走一遍
            helper(node.right);
            //遇到右子树了  也要 root  left  right 顺序走一遍
        }
    }
    helper(root);
    return arr;
}

console.log(preorderTraversal(tree));
;

