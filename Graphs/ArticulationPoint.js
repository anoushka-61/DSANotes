
// What is an Articulation Point?
// An articulation point (or cut vertex) in a graph is a vertex that, when removed (along with its edges), increases the number of connected components in the graph. In simpler terms, removing an articulation point disconnects the graph, meaning the remaining graph becomes split into two or more disconnected subgraphs.

// Formal Definition: A vertex v in a connected graph is called an articulation point if removing v (and all edges connected to v) results in a graph that has more connected components than the original graph.
// Articulation points are critical for network connectivity because they represent single points of failure—removing them can break the connectivity between parts of the graph.

// When to Use Articulation Points?
// You would typically look for articulation points in scenarios where network resilience or fault tolerance is critical. Identifying articulation points helps in determining vulnerabilities or critical connections in a system.

// Here are common cases where articulation points are used:

// Network Design:

// Objective: You need to ensure the reliability and robustness of communication networks, computer networks, or infrastructure systems.
// Use Case: Finding articulation points helps in identifying weak points in the network, where the failure of a single node can cause disconnection. This can assist in reinforcing those weak points or rerouting connections.
// Road/Transportation Systems:

// Objective: Ensure that traffic flow or transportation routes are not disrupted by the failure of a single road or station.
// Use Case: In a transportation network (cities connected by roads), an articulation point represents a city whose closure would split the network, disrupting travel between regions. Identifying such cities can help with infrastructure planning.
// Internet and Computer Networks:

// Objective: Maintain continuous access across servers or routers in a computer network.
// Use Case: In computer networks, routers or servers can act as articulation points. If an articulation point fails, certain parts of the network become inaccessible. Understanding which routers or servers are critical for maintaining network connectivity can help ensure high availability and plan redundancy.
// Social Network Analysis:

// Objective: Analyze the strength and connectivity of social relationships.
// Use Case: In a social network, articulation points are individuals whose removal would split the network into separate groups. Identifying such people can provide insights into the network’s structure and help target important individuals for maintaining connectivity within the community.
// Biological Networks:

// Objective: Ensure robustness in biological systems like food webs or metabolic pathways.
// Use Case: In biological networks (e.g., ecosystems, food chains), certain species act as articulation points. If they are removed, the ecosystem could collapse into disconnected subsystems. Identifying these species helps understand vulnerabilities in ecosystems.
// Graph-Based Applications:

// Objective: Ensure structural integrity and fault tolerance.
// Use Case: Articulation points are useful in graph-based applications like circuit design, database integrity checks, and software dependency management to avoid single points of failure.



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
