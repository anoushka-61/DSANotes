//To find the Strongly Connected Components (SCCs) in a directed graph, you can use Kosaraju's algorithm or Tarjan's algorithm. Here, I'll provide an implementation using Kosaraju's algorithm, which consists of two main steps:

// Perform a Depth-First Search (DFS) on the original graph to get the finish times of each vertex.
// Transpose the graph (reverse the direction of all edges).
// Perform DFS on the transposed graph in the order of decreasing finish times to identify the SCCs.

//O(V+E)
class Graph {
    constructor(vertices) {
        this.vertices = vertices;
        this.adjacencyList = new Array(vertices).fill(null).map(() => []);
    }

    addEdge(source, destination) {
        this.adjacencyList[source].push(destination);
    }

    // Step 1: Perform DFS and store the finish times -> Topological sorting
    dfs(vertex, visited, stack){
        visited[vertex]=true;
        
        for (let neighbour  of this.adjacencyList[vertex]){
            if(!visited[neighbour]){
                this.dfs(neighbour,visited,stack)
            }
        }
        stack.push(vertex);
    }

    //step2: Transpose the graph

    transposeGraph(){
        const transposeGraph = new Graph(this.vertices)

        for(let i=0 ; i<this.vertices; i++){
            for(const neighbour of this.adjacencyList[i]){
                transposeGraph.addEdge(neighbour,i)
            }
        }
        return transposeGraph;
    }

    findSCCs(){
        const stack=[];
        const visited = new Array(this.vertices).fill(false)
//step1
        for(let i =0 ; i<this.vertices; i++){
            if(!visited[i]){
                this.dfs(i, visited, stack)
            }
        }
//step2
        const transposedGraph = this.transposeGraph()

        // Perform DFS on transposed graph using the stack order
        const sccs = [];
        visited.fill(false)// Reset visited for transposed graph

        while(stack.length){
            const vertex = stack.pop()

            if(!visited[vertex]){
                const scc=[]
                transposedGraph.dfs(vertex, visited, scc)
                sccs.push(scc)
            }
        }
        return sccs;
    }
}

// Example Usage
const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(1, 2);
graph.addEdge(2, 0);
graph.addEdge(1, 3);
graph.addEdge(3, 4);
graph.addEdge(4, 3);

const sccs = graph.findSCCs();
console.log("Strongly Connected Components:", sccs);

