/**
binary tree
returns branch sums from left to right
branch sum => sum values of nodes from root to leaf
 */ 
// Impleted with DFS Algorithm
 // This is the class of the input root.
// Do not edit it.
//O(N) time complexity | O(N) space complexity
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function CalculatebranchSums(node, runningSum, sums) {
    // Write your code here.
      if(!node) return ;
      const newRunningSum = runningSum + node.value;
      if (!node.left && !node.right) {
          sums.push(newRunningSum);
          return;
      }
      CalculatebranchSums(node.left, newRunningSum, sums);
      CalculatebranchSums(node.right, newRunningSum, sums);
  }
  
  const branchSums = (node) => {
      const sums = [];
      CalculatebranchSums(node, 0, sums);
      return sums;
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  