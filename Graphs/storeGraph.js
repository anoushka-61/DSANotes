class Graph {

    constructor(vertexCount){
        this.vertexCount = vertexCount;
        this.adjacencyList= new Array(vertexCount).fill(null).map(()=>[]);
        
    }
//to make sure empty array is
     ensureVertex(vertex){
       while(vertex>=this.adjacencyList.length){
        this.adjacencyList.push([])
       }
    }

    addEdge=(source, destination)=>{
        this.ensureVertex(source);
        this.ensureVertex(destination);
        this.adjacencyList[source].push(destination);
        
        this.adjacencyList[destination].push(source);
        
    }

    
    displayGrap=()=>{
        const verticesWithEdge = this.adjacencyList.map((edges, index)=>
           ( edges?.length>0?`${index}-${edges.join(",")}`:null)
        ).filter(item=>item!==null)
        if(verticesWithEdge.length){
            console.log(verticesWithEdge.join("\n"))
        }
            else{
                console.log("No edges in graph")
            }
       
    }
    
    displayNeighbours=(vertex1)=>{
        const neighbours = this.adjacencyList[vertex1];
        console.log(`Neigbours of ${vertex1}-${neighbours.join(",")}`)
    }
}

const graph = new Graph(0);
graph.addEdge(5, 1); // Adds an edge between vertex 5 and vertex 1
graph.addEdge(0, 5); // Adds an edge between vertex 0 and vertex 5
graph.addEdge(1, 2);

graph.displayGrap()
graph.displayNeighbours(5)