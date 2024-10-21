var removeStones = function(stones) {
    const graph = new Map(); // Create a map to store connections
    const visited = new Array(stones.length).fill(false); // Array to track visited stones
    let connectedComponents = 0; // Counter for connected components

    // Build the graph
    for (let i = 0; i < stones.length; i++) {
        const [x, y] = stones[i];

        // Connect stones sharing the same x-coordinate
        if (!graph.has(x)) graph.set(x, []);
        graph.get(x).push(i);

        // Connect stones sharing the same y-coordinate (using offset to avoid negative indexing)
        if (!graph.has(y + 10000)) graph.set(y + 10000, []);
        graph.get(y + 10000).push(i);
    }

    // DFS function to explore the graph
    const dfs = (node) => {
        visited[node] = true; // Mark the current stone as visited
        const [x, y] = stones[node]; // Get the coordinates of the current stone

        // Explore all stones in the same row
        for (let neighbour of graph.get(x)) {
            if (!visited[neighbour]) {
                dfs(neighbour); // Recur for the connected stone
            }
        }

        // Explore all stones in the same column
        for (let neighbour of graph.get(y + 10000)) {
            if (!visited[neighbour]) {
                dfs(neighbour); // Recur for the connected stone
            }
        }
      
    };

    // Count connected components
    for (let i = 0; i < stones.length; i++) {
        if (!visited[i]) {
            connectedComponents +=dfs(i); // Correctly call dfs with parentheses
             // Increment the count of connected components
        }
    }

    // Maximum number of stones that can be removed
    return stones.length - (connectedComponents-1); // Total stones - number of connected components
};

// Example usage:
const stones = [[0,0],[2,2],[10000,2]];
console.log(removeStones(stones)); // Output: 1