class WeightedGraph{

    constructor(vertexCount){
        this.arrayList = new Array(vertexCount).fill(null).map(()=>[])
    }

    ensureVertex=(vertex)=>{
        while(vertex>=this.arrayList.length){
            this.arrayList.push([])
        }
    }

    addEdgesWithWeight=(source, destination, weight)=>{
        this.ensureVertex(source);
        this.ensureVertex(destination);

        this.arrayList[source].push({vertex:destination,weight:weight})
        this.arrayList[destination].push({vertex:source,weight:weight})

    }

    displayGraph=()=>{
        const vertexWithEdges = this.arrayList.map((edges,index)=>(
            edges?.length>0?`${index}- ${edges.map(edge=> `${edge.vertex} (weight: ${edge.weight})`).join(",")}`:null
        )).filter(index=>index!==null)
        console.log(vertexWithEdges?.length?vertexWithEdges.join("\n"):"No Edges Added")
    }

    displayNeighbours=(vertex)=>{
        const neighbour= this.arrayList[vertex]

        console.log(`Neighbours of ${vertex}-${neighbour.map((edge=>`${edge.vertex} with weight :${edge.weight}`)).join(",")}`)
    }
}

const graph =new WeightedGraph(0);
graph.addEdgesWithWeight(5, 1, 10); // Adds an edge between vertex 5 and vertex 1 with weight 10
graph.addEdgesWithWeight(0, 5, 5);  // Adds an edge between vertex 0 and vertex 5 with weight 5
graph.addEdgesWithWeight(1, 2, 8);  // Adds an edge between vertex 1 and vertex 2 with weight 8

graph.displayGraph();
graph.displayNeighbours(5);