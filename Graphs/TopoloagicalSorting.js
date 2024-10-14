//Topological sorting is used for ordering the vertices of a directed acyclic graph (DAG) such that for every directed edge from vertex u to vertex v, u comes before v in the ordering. A common approach to perform topological sorting is by using Depth First Search (DFS) or Kahn's algorithm (which uses in-degree).

class Graph {

    constructor(vc){
        this.arrayList=new Array(vc).fill(null).map(()=>[])
    }

    ensureVertices=(vertex)=>{
        while(vertex>=this.arrayList.length){
            this.arrayList.push([])
        }
    }

    addEdge(s,d){
        this.ensureVertices(s)
        this.arrayList[s].push(d)
    }

    displayGraph=()=>{
        const vertexWithEdges = this.arrayList.map((edge,index)=>(
            edge.length?`${index}-${edge.join(",")}`:null
        )).filter(index=>index!==null)

        console.log(vertexWithEdges.join("\n"))
    }

    topologicalSort=()=>{
        const visited = new Array(this.arrayList.length).fill(false)
        const stack =[];

        for (let vertex =0; vertex< this.arrayList.length ; vertex++){
           if(!visited[vertex] ){
                  this.dfsTraversal(vertex,visited,stack)
           }
        }
        return stack.reverse()
    }
    dfsTraversal(vertex,visited,stack){
        visited[vertex]=true;
         for (let neighbor of this.arrayList[vertex]){
            if(!visited[vertex]){
                this.dfsTraversal(neighbor,visited,stack)
            }
         }
         stack.push(vertex)
    }
}
const graph = new Graph(0);
graph.addEdge();



graph.displayGraph()

const topologicalOrder = graph.topologicalSort()

console.log(topologicalOrder)