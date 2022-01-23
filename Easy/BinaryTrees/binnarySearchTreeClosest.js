// find closest to BST
// takes tree and target
// closest value in valid BST => target in tree
// BST integer
// 	=>left (child Node)
// 	=>right (child Node)
// BST => values of nodes in right > values of nodes in left

// O(logN) time | O(N) space
// Worst case O(N) time | O(N) space
function findClosestValueHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueHelper(tree, target, tree.value);
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/* Method 2 O(logN) time | O(1) space 
// Worst case O(N) time | O(N) space
*/

function findClosestValueInBst(tree, target) {
  // Write your code here.
  let currentNode = tree;
  let closest = tree.value;
  while (currentNode !== null) {
    if (Math.abs(closest - target) > Math.abs(currentNode.value - target)) {
      closest = currentNode.value;
    }
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    } else if (currentNode.value < target) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
