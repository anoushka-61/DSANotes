// Approach:
// Visited Array: To mark which vertices have been visited during the traversal.
// Recursion Stack: To track the vertices currently being explored (those in the current recursion stack).
// If you encounter a vertex that is already in the recursion stack, it indicates the presence of a cycle.
// Algorithm:
// Traverse the graph using DFS.
// If a vertex is visited and already present in the recursion stack, it indicates a back edge, and hence a cycle.
// If DFS completes for a vertex, remove it from the recursion stack.



class Graph {
    constructor(vertexCount) {
        this.arrayList = new Array(vertexCount).fill(null).map(() => []); // Initializes empty arrays for each vertex
    }

    ensureVertex = (vertex) => {
        while (vertex >= this.arrayList.length) {
            this.arrayList.push([]);
        }
    };

    addEdges = (s, d) => {
        this.ensureVertex(s); // Ensure both source and destination vertices are initialized
        this.ensureVertex(d);
        this.arrayList[s].push(d); // Since it's a directed graph, only add s -> d
    };

    displayGraph = () => {
        const vertexWithEdges = this.arrayList
            .map((edge, index) =>  edge.length > 0 ? `${index}-${edge.join(",")}` : null)
            .filter(index => index !== null);

        console.log(vertexWithEdges.join("\n"));
    };

    cycleDetection = () => {
        const visited = new Array(this.arrayList.length).fill(false);
        const rec = new Array(this.arrayList.length).fill(false);
        
        for (let vertex = 0; vertex < this.arrayList.length; vertex++) {
            if (!visited[vertex] && this.arrayList[vertex].length) {
                if (this.dfsCycle(vertex, visited, rec)) {
                    return true;
                }
            }
        }
        return false;
    };

    dfsCycle = (current, visited, rec) => {
        visited[current] = true;
        rec[current] = true;

        // Check if the adjacency list for this vertex exists and is an array
        if (Array.isArray(this.arrayList[current])) {
            for (let neighbour of this.arrayList[current]) {
                if (!visited[neighbour]) {
                    if (this.dfsCycle(neighbour, visited, rec)) {  // if cycle exist at neigbour's
                        return true;
                    }
                } else if (rec[neighbour]) {
                    // If the neighbor is in the recursion stack, cycle is detected
                    return true;
                }
            }
        }

        rec[current] = false; // Remove from recursion stack after backtracking
        return false;
    };
}

// Initialize graph with 5 vertices (0 through 4)
const graph = new Graph(0);
graph.addEdges(0, 1); // Directed edge 0 -> 1
graph.addEdges(1, 2); // Directed edge 1 -> 2
graph.addEdges(2, 0); // Directed edge 2 -> 4
graph.addEdges(3,4); // Directed edge 2 -> 3

graph.displayGraph();

if (graph.cycleDetection()) {
    console.log("Cycle detected in the graph");
} else {
    console.log("No cycle detected in the graph"); // Closing statement
}
