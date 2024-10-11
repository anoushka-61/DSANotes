class Graph{

    constructor(v){
        this.arrayList = new Array(v).fill(null).map(()=>[])
    }

    ensureVertices=(vertex)=>{
        while(vertex>=this.arrayList.length){
            this.arrayList.push([])
        }
    }

    addEdges=(s,d)=>{
        this.ensureVertices(s);
        this.ensureVertices(d);

        this.arrayList[s].push(d)
        this.arrayList[d].push(s)
    }

    displayGraph =()=>{
        const vertexWithEdges = this.arrayList.map((e,i)=>(
            e.length?`${i}-${e.join(",")}`:null
        )).filter(i=>i!==null)

        console.log(vertexWithEdges.length?vertexWithEdges.join("\n"):"No Edges Present")
    }

    dfsTraversal = () => {
        const visited = new Array(this.arrayList.length).fill(false);
        for (let vertex = 0; vertex < this.arrayList.length; vertex++) {
            if (!visited[vertex] && this.arrayList[vertex].length > 0) {
                this.dfs(vertex, visited);
            }
        }
    }

    dfs = (vertex, visited) => {
        visited[vertex] = true; // Mark the vertex as visited
        console.log(vertex); // Process the vertex

        for (let neighbour of this.arrayList[vertex]) {
            if (!visited[neighbour]) {
                this.dfs(neighbour, visited); // Recursive DFS call
            }
        }
    }
}
const graph = new Graph(0);
graph.addEdges(5, 3); // Adds an edge between vertex 5 and vertex 1
graph.addEdges(3, 6); // Adds an edge between vertex 0 and vertex 5
graph.addEdges(1, 2);

graph.displayGraph()
graph.dfsTraversal()