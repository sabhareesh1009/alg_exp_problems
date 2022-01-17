
/*
Finding nodes depth for the binary tree, depth is distance between the root and node.
 */
// O(N) time complexity; N is no of nodes| O(H) space complexity; H is height of the tree.
// 1st solution with recursive
function nodeDepths(root) {
	let depthNode = 0;
	depthNode = findNodeDepth(root, depthNode);
	return depthNode;
}

function findNodeDepth(node, depthNode) {
	if(!node)
		return 0;
	return depthNode + findNodeDepth(node.left, depthNode+1) + findNodeDepth(node.right, depthNode+1);
}


// 2nd solution with iterations
// O(N) time complexity; N is no of nodes| O(H) space complexity; H is height of the tree.
function nodeDepths(root) {
    // Write your code here.
      const stack = [{node: root, depth: 0}];
      let sumsDepth = 0;
      while(stack.length > 0) {
          const {node, depth} = stack.pop();
          if(node === null ) 
              continue;
          sumsDepth = sumsDepth + depth;
          stack.push({node: node.left, depth: depth+1});
          stack.push({node: node.right, depth: depth+1});
      }
      return sumsDepth;
  }
