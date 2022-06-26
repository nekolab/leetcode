/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */


let visitedCopiedMap = new Map()

/**
* @param {Node} node
* @return {Node}
*/
var cloneGraph = function(node) {
    if (node === null) {
        return null
    }
    
    if (visitedCopiedMap.has(node)) {
        return visitedCopiedMap.get(node)
    }
    
    let newNode = new Node(node.val)
    visitedCopiedMap.set(node, newNode)
    
    newNode.neighbors = node.neighbors.map(neighbor => cloneGraph(neighbor))
    
    return newNode
};
 