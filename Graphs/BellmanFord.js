class Graph {
    constructor(vertexCount) {
        this.vertexCount = vertexCount;
        this.edges = []; // Store edges as an array of objects
    }

    addEdge(source, destination, weight) {
        this.edges.push({ source, destination, weight });
    }

    bellmanFord(startNode) {
       const distance = new Array(this.edges.length).fill(Infinity) 
       distance[startNode]=0

       //Step 2 : Relaxation from 0 to V-1

       for (let i=0; i<this.edges.length; i++){
        for (const {source,destination,weight } of this.edges){
            if(distance[source]!==Infinity && distance[source] + weight < distance[destination]){
                distance[destination]= distance[source] + weight
            }
        }
       }
          // Step 3: Check for negative-weight cycles
          for (const { source, destination, weight } of this.edges) {
            if (distance[source] !== Infinity && distance[source] + weight < distance[destination]) {
                console.error("Graph contains a negative-weight cycle");
                return;
            }
        }
    }

    console.log("shortest distance from 0:",distance
        .map((vertex, index) => ({ index, vertex }))   // Create objects with index and distance
        .filter(item => item.vertex !== Infinity)      // Filter out the vertices with Infinity distance
        .forEach(item => console.log(`${startNode} - ${item.index}=>${item.vertex}`)))
    }
}

// Example Usage
const graph = new Graph(4); // Create a graph with 4 vertices
graph.addEdge(0, 5, -1); // 0 -> 1 with weight -1
graph.addEdge(0, 7, 4);  // 0 -> 2 with weight 4
graph.addEdge(5, 7, 3);  // 1 -> 2 with weight 3
graph.addEdge(5, 3, 2);  // 1 -> 3 with weight 2
graph.addEdge(5, 0, 1);  // 1 -> 0 with weight 1
graph.addEdge(7, 3, 2);  // 2 -> 3 with weight 2
graph.addEdge(3, 1, -1); // 3 -> 1 with weight -1

// Run Bellman-Ford algorithm starting from node 0
graph.bellmanFord(0);
