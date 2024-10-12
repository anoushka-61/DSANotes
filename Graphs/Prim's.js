class Graph {
    constructor(vertexCount) {
        this.vertexCount = vertexCount;
        this.adjacencyList = new Array(vertexCount).fill(null).map(() => []);
    }

    addEdge(source, destination, weight) {
        this.adjacencyList[source].push({ node: destination, weight });
        this.adjacencyList[destination].push({ node: source, weight }); // Undirected graph
    }

    // Function to find the vertex with the minimum key value
    minKey(key, visited) {
        let min = Infinity;
        let minIndex = -1;

        for (let v = 0; v < this.vertexCount; v++) {
            if (!visited[v] && key[v] < min) {
                min = key[v];
                minIndex = v;
            }
        }

        return minIndex;
    }

    primMST() {
        const key = new Array(this.vertexCount).fill(Infinity); // Minimum weight to include vertex in MST
        const visited = new Array(this.vertexCount).fill(false); // To track vertices included in MST
        const parent = new Array(this.vertexCount).fill(-1); // To store the resulting MST
        let totalWeight = 0; // To keep track of the total weight of the MST

        key[0] = 0; // Start from vertex 0

        for (let i = 0; i < this.vertexCount - 1; i++) {
            // Pick the minimum key vertex from the set of vertices not yet included in MST
            let u = this.minKey(key, visited);

            // Add the picked vertex to the MST
            visited[u] = true;

            // Update key array for adjacent vertices of the picked vertex
            for (const { node: v, weight } of this.adjacencyList[u]) {
                if (!visited[v] && weight < key[v]) {
                    key[v] = weight;
                    parent[v] = u; // Store the parent to print the MST later
                }
            }
        }

        // Print the edges of the MST and calculate total weight
        console.log("Edges in the Minimum Spanning Tree:");
        for (let i = 1; i < this.vertexCount; i++) {
            console.log(`${parent[i]} - ${i}: ${key[i]}`);
            totalWeight += key[i]; // Accumulate the total weight
        }

        console.log(`Total weight of the Minimum Spanning Tree: ${totalWeight}`);
    }
}

// Example Usage
const graph = new Graph(5);
graph.addEdge(0, 1, 2);
graph.addEdge(0, 3, 6);
graph.addEdge(1, 2, 3);
graph.addEdge(1, 3, 8);
graph.addEdge(1, 4, 5);
graph.addEdge(2, 4, 7);
graph.addEdge(3, 4, 9);

// Run Prim's algorithm
graph.primMST();
