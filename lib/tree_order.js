function inOrderArray(root) {
    if (root === null) {
        return [];
    } else {
        return _inOrderArray(root);
    }
}

function _inOrderArray(root, arr = new Array()) {
    if (root.left) _inOrderArray(root.left, arr);
    arr.push(root.val);
    if (root.right) _inOrderArray(root.right, arr);

    return arr;
}

function postOrderArray(root) {
    // if the root is null, return an empty array
    // get the array for visiting the left node
    // get the array for visiting the right node
    // return the left array concatenated with the right array
    //   concatenated with the root value
}

module.exports = {
    inOrderArray,
    postOrderArray,
};
