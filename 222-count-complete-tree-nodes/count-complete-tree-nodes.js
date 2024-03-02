var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    
    var d = depth(root);
    
    // If the depth of the right subtree is equal to d - 1, it means the left subtree is a full binary tree
    if (depth(root.right) == d - 1) {
        return (1 << d) + countNodes(root.right);
    } else { // Otherwise, the right subtree is a full binary tree with depth d - 2
        return (1 << (d - 1)) + countNodes(root.left);
    }
};

var depth = function(node) {
    var d = 0;
    while (node !== null) {
        node = node.left;
        ++d;
    }
    return d - 1;
};
