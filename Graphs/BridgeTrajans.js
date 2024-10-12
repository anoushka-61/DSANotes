class Graph {
    constructor(vertexCount) {
        this.vertexCount = vertexCount;
        this.adjacencyList = new Array(vertexCount).fill(null).map(() => []);
    }

    addEdge(source, destination) {
        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source); // Since it's an undirected graph
    }

    findBridges() {
        const visited = new Array(this.vertexCount).fill(false);
        const discovery = new Array(this.vertexCount).fill(-1); // Discovery times of visited vertices
        const low = new Array(this.vertexCount).fill(-1); // Lowest points reachable from the subtree
        const parent = new Array(this.vertexCount).fill(null);
        const bridges = [];
        let time = 0;

        const dfs = (vertex) => {
            visited[vertex] = true;
            discovery[vertex] = low[vertex] = time++; // Set discovery and low value

            for (const neighbor of this.adjacencyList[vertex]) {
                if (!visited[neighbor]) {
                    parent[neighbor] = vertex;
                    dfs(neighbor);


                    //will be performed after all the recursive calls are finished 
                    // Check if the subtree rooted at neighbor has a connection back to ancestors

                    
                    low[vertex] = Math.min(low[vertex], low[neighbor]);

                    // A bridge is found if the lowest reachable vertex from neighbor is still higher than the discovery time of vertex

                   
                    if (low[neighbor] > discovery[vertex]) {
                        bridges.push([vertex, neighbor]);
                    }
                } else if (neighbor !== parent[vertex]) {
                    // If the neighbor is visited and it's not the parent of vertex, update low value of vertex
                    low[vertex] = Math.min(low[vertex], discovery[neighbor]);
                }
            }
        };

        // Call DFS for all unvisited vertices (in case of disconnected graph)
        for (let i = 0; i < this.vertexCount; i++) {
            if (!visited[i]) {
                dfs(i);
            }
        }

        return bridges;
    }
}



// Example Usage
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);

const bridges = graph.findBridges();
console.log('Bridges in the graph:', bridges);
