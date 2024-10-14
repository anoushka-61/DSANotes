class Node{
    constructor(val){
        this.val=val;
        this.neighbor=[]
    }
}
//DFS
const cloneGraph =(node)=>{
if(!node) return null;
const clonedNodes = new Map()
const dfs =(currentNode)=>{
 if(clonedNodes.has(currentNode)){
    return clonedNodes.get(currentNode)
 }
 const cloned = new Node(currentNode);
 clonedNodes.set(currentNode, cloned);
 for(let neighbors of currentNode.neighbor){
    cloned.neighbor.push(dfs(neighbors))
 }
 return cloned
}

return dfs(node)
}
// Example Usage:
// Constructing the graph
// Node 1 connects to Nodes 2 and 4
// Node 2 connects to Nodes 1 and 3
// Node 3 connects to Node 2
// Node 4 connects to Node 1
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
node1.neighbor.push(node2, node4);
node2.neighbor.push(node1, node3);
node3.neighbor.push(node2);
node4.neighbor.push(node1);

// Cloning the graph
const clonedGraph = cloneGraph(node1);
console.log(clonedGraph); // Output the cloned graph
