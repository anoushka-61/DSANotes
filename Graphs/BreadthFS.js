//O(V+E)

class Graph{
    constructor(vertexCount){
        this.arrayList= new Array(vertexCount).fill(null).map(()=>[])
    }

    ensureVertices=(vertex)=>{
        while(vertex>=this.arrayList.length){
            this.arrayList.push([])
        }
    }

    addEdges=(s,d)=>{
        this.ensureVertices(s);
        this.ensureVertices(d);
        this.arrayList[s].push(d);
        this.arrayList[d].push(s);
    }

    displayGraph=()=>{
        const verticesWithEdge = this.arrayList.map((edge,index)=>(edge?.length>0?`${index}-${edge.join(",")}`:null)).filter(index=>index!==null)
        console.log(verticesWithEdge?.length?verticesWithEdge.join("\n"):"No Edges Present")
    }

    bfsTraversalDisconnected = () => {
        const visited = new Array(this.arrayList.length).fill(false);
        for (let vertex = 0; vertex < this.arrayList.length; vertex++) {
            if (!visited[vertex] && this.arrayList[vertex].length > 0) {
                this.BFS(vertex, visited);
            }
        }
    }

    BFS=(startVertex,visited)=>{
        // we visit all the immediate neighbours first than others
        //maintain visited array
        //queuse -> store the node whose neighbour need to be visited
        const queue =[];
        visited[startVertex] = true;
        queue.push(startVertex)
        console.log("start vertex :",startVertex)

        while(queue.length){
            const vertex = queue.shift();
            
            console.log(vertex);
            for(let neighbour of this.arrayList[vertex]){
                if(!visited[neighbour]){
                   
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            }
        }
       
    }
}

const graph = new Graph(0);
graph.addEdges(5, 3); // Adds an edge between vertex 5 and vertex 1
graph.addEdges(3, 6); // Adds an edge between vertex 0 and vertex 5
graph.addEdges(1, 2);

graph.displayGraph()
graph.bfsTraversalDisconnected(5)
