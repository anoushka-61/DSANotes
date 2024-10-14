// You are given an integer n. There is an undirected graph with n nodes, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.

// Return the number of pairs of different nodes that are unreachable from each other.

function countUnreachablePairs(n, edges) {
    // Step 1: Build the graph as an adjacency list
    const graph = Array.from({ length: n }, () => []);
    const totalPairs = (n*(n-1))/2
    let reachablePair=0
    let visited = Array(n).fill(false)
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);  // since the graph is undirected
    }

    let dfs =(i)=>{
        visited[i]=true;
        let connected=1
        for (let a of graph[i]) {
            if (!visited[a]) {
                
                connected+= dfs(a,connected); // Recursively count connected nodes
            }
        }
        return connected
}
   for(let i=0 ;i<n;i++)
    {
        
    if(!visited[i])
{
    let count=dfs(i)
    
    reachablePair+= (count*(count-1)) /2 
    }
   }
    // Step 2: DFS to find connected components

    return totalPairs-reachablePair

}

// Example usage:
const n1 = 3;
const edges1 = [[0, 1], [0, 2], [1, 2]];
console.log(countUnreachablePairs(n1, edges1));  // Output: 0

// const n2 = 6;
// const edges2 = [[0, 1], [2, 3], [4, 5]];
// console.log(countUnreachablePairs(n2, edges2));  // Output: 12
