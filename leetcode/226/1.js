let tree = {
    val: 'f',
    left: {
        val: 'c',
        left: {
            val:'a'
        },
        right: {
            val:'d'
        }
    },
    right: {
        val: 'e',
        left: {
            val:'h'
        },
        right: {
            val:'g'
        }
    }
}
var invertTree = function (root) {
    function swap(node) {
        if (!node) return;
        let val = node.val;
        [node.left, node.right] = [node.right, node.left];
        swap(node.left)
        swap(node.right)
    }
    swap(root)
    return root;
};
console.log(invertTree(tree));
