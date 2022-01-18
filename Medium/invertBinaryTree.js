/* Invert the binary tree, tree with nodes of left and right */
// 1st solution with recursive approach

// O(N) time complexity | O(d) space complexity ; d - depth of tree
function invertBinaryTree(tree) {
  if (!tree) return;
  const leftNode = tree.left;
  tree.left = tree.right;
  tree.right = leftNode;
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 2nd solution with iterations using queues
// O(N) time complexity and O(N) space complexity
function invertBinaryTree(tree) {
  // Write your code here.
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (current === null) continue;
    swapLeftAndRight(current);
    queue.push(current.left);
    queue.push(current.right);
  }
}

const swapLeftAndRight = (tree) => {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};
