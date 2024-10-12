// Recursive Function Calls and Backtracking
// Call Stack:

// When a function is called in JavaScript (or most programming languages), it is added to the call stack, which keeps track of function calls.
// When the function executes, it may call itself recursively. Each new call creates a new context on the stack.
// Backtracking:

// In backtracking algorithms (like the DFS in your example), once a base case is met or all possibilities from a certain point have been explored, the function will return control to the previous function call in the stack.
// This return doesn't mean that the function stops executing entirely; it simply means that it finishes that specific instance of the function call and goes back to where it left off in the previous call (continuing from the next line after the recursive call).

//O(v^V)
class Graph{
    constructor(v){
        this.arrayList = new Array(v).fill(null).map(()=>[])
    }

    ensureVertices=(v)=>{
        while(v>=this.arrayList.length){
            this.arrayList.push([])
        }
    }

    addEdges=(s,d)=>{
        this.ensureVertices(s)
        this.ensureVertices(d)

        this.arrayList[s].push(d)
        this.arrayList[d].push(s)
    }

    displayGraph=()=>{
        const verticesWithEdge = this.arrayList.map((edge,index)=>(edge?.length>0?`${index}-${edge.join(",")}`:null)).filter(index=>index!==null)
        console.log(verticesWithEdge?.length?verticesWithEdge.join("\n"):"No Edges Present")
    }

    findAllPAths=(s,t)=>{
        const allPaths=[]
        const visited= new Array(this.arrayList.length).fill(false)
        this.dfsAllPath(s,t,[],allPaths,visited)
        return(allPaths)
    }
    dfsAllPath=(current,t,path,allPaths,visited)=>{
      visited[current]=true
      path.push(current)
      if(current===t){
        allPaths.push([...path])
      }else{
        for(let neighbour of this.arrayList[current]){
            if(!visited[neighbour]){
                this.dfsAllPath(neighbour,t,path,allPaths,visited)
            }
        }
      }
      path.pop();
      visited[current]=false
    }
}

const graph = new Graph(6);
graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(1, 3);
graph.addEdges(1, 4);
graph.addEdges(2, 4);
graph.addEdges(3, 5);
graph.addEdges(4, 5);

// Find all paths from vertex 0 to vertex 5
const paths = graph.findAllPAths(0, 5);
console.log(paths)