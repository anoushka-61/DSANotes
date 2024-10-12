class Graph {
    constructor(vertexCount) {
        this.adjacencyList = Array.from({ length: vertexCount }, () => []);
    }

    addEdge(s, d, weight) {
        this.adjacencyList[s].push({ node: d, weight });
    }

    displayGraph(){
        const vertexWithEdges = this.adjacencyList.map((edges,index)=>(
            edges?.length>0?`${index}- ${edges.map(edge=> `${edge.node} (weight: ${edge.weight})`).join(",")}`:null
        )).filter(index=>index!==null)
        console.log(vertexWithEdges?.length?vertexWithEdges.join("\n"):"No Edges Added")
    }

    dijkstra(startNode) {
        const distance = new Array(this.adjacencyList.length).fill(Infinity)
        const visited = new Array(this.adjacencyList.length).fill(false)
        const pq =[]
        distance[startNode] = 0;
        pq.push({node:startNode , distance:0})
       while(pq.length){
        pq.sort((a,b)=>a-b)
        const {node:curr} =pq.shift()
  console.log("curr",curr)
        if(visited[curr]) continue;
        visited[curr]=true;

        for(let { node: neighbor, weight } of this.adjacencyList[curr]){
            let alt = distance[curr]+weight
            console.log("alt",alt)
            if(alt<distance[neighbor]){
                distance[neighbor]=alt
                console.log("distance",distance)
                pq.push({node:neighbor, distance:alt})
            }
        }
       }
     return distance;
    }
}

// Example usage
const graph = new Graph(6);
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 1);
graph.addEdge(1, 2, 2);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 1, 1);
graph.addEdge(2, 3, 8);
graph.addEdge(3, 4, 3);
graph.addEdge(4, 5, 2);

graph.displayGraph()
const distances = graph.dijkstra(0);
console.log("Shortest distances from node 0:", distances);
