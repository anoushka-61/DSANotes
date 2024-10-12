class Graph {
    constructor(vertexCount) {
        this.vertexCount = vertexCount;
        this.adjacencyList = new Map();
    }

    addEdge(u, v) {
        if (!this.adjacencyList.has(u)) this.adjacencyList.set(u, []);
        if (!this.adjacencyList.has(v)) this.adjacencyList.set(v, []);
        this.adjacencyList.get(u).push(v);
        this.adjacencyList.get(v).push(u); // Undirected graph
    }

    findArticulationPoints() {
      const discovery = new Array(this.vertexCount).fill(-1)
      const low = new Array(this.vertexCount).fill(-1)
      const parent = new Array(this.vertexCount).fill(-1)
      const visited = new Array(this.vertexCount).fill(false)
      const articulationPoint= new Set()
      let time =0;

      const dfs =(vertex)=>{
        visited[vertex]=true;
        discovery[vertex]=low[vertex]=time++;
        let children =0;
        for(let neighbour of this.adjacencyList.get(vertex)){
            if(!visited[neighbour]){
               parent[neighbour]=vertex;
               children++;
                dfs(neighbour)

                low[vertex] = Math.min(low[vertex],low[neighbour])

                if(parent[vertex]!==-1 && low[neighbour] >= discovery[vertex]){
                    articulationPoint.add(vertex)
                }

                if(parent[vertex]===-1 && children>1){
                    articulationPoint.add(vertex)
                }
            }else if(neighbour!==parent[vertex]){
                low[vertex] ==Math.min(discovery[neighbour],low[vertex])
            }


        }
      

      }
      for(let i=0;i<this.vertexCount;i++){
        if(!visited[i]){
            dfs(i)
        }
      }

      console.log([...articulationPoint])

    }

}

// Example Usage:
const graph = new Graph(5); // Create a graph with 5 vertices
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(3, 4);

// Find articulation points in the graph
graph.findArticulationPoints();
