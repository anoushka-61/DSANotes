class Graph {
    constructor(vertexCount) {
        this.adjacencyList = new Array(vertexCount).fill(null).map(() => []);
    }

    addEdge(s, d) {
        // Add edge in both directions since the graph is undirected
        this.adjacencyList[s].push(d);
        this.adjacencyList[d].push(s); // Undirected edge
    }

    hasCycle() {
        const visited = new Array(this.adjacencyList.length).fill(false);

        // Check for cycle in each component of the graph
        for (let vertex = 0; vertex < this.adjacencyList.length; vertex++) {
            if (!visited[vertex]) {
                if (this.dfs(vertex, visited, -1)) {
                    return true; // Cycle found
                }
            }
        }
        return false; // No cycle found
    }

    dfs(current, visited, parent) {
        visited[current] = true;

        // Explore all adjacent vertices
        for (const neighbour of this.adjacencyList[current]) {
            // If the neighbour is not visited, recurse on it
            if (!visited[neighbour]) {
                if (this.dfs(neighbour, visited, current)) {
                    return true; // Cycle found in the recursive call
                }
            }
            // If the neighbour is visited and is not the parent of the current vertex
            else if (neighbour !== parent) {
                return true; // Cycle found
            }
        }
        return false; // No cycle found
    }
}

// Example usage
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0); // This edge creates a cycle
graph.addEdge(2, 3);
graph.addEdge(3, 4);

if (graph.hasCycle()) {
    console.log("Cycle detected in the undirected graph");
} else {
    console.log("No cycle detected in the undirected graph");
}
