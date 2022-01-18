/* Depth-first search each node class has name and array of optional child nodes,
need to implement depthSearchMethod on the node class which takes empty array and 
traverse using DFS and stores all names in empty array.
*/

// O(V + E) time complexity and O(V) space complexity, V - vertices for node in graph and E - edges of the graph
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
