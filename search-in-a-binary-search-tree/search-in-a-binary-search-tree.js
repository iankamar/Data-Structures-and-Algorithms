var searchBST = function(root, val) {
    if (root === null) {
        return null;
    } else if (val === root.val) {
        return root;
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};