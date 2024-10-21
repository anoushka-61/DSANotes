//684

const RedundantGraph =(edges)=>{
    //Prerform Dfs
    let graph = new Array(edges.length+1).fill(null).map(()=>[])
    let visited = new Array(edges.length+1).fill(false)

    const dfs =(u,v)=>{
        if (visited[u]) return false;
        visited[u] =true;

        if(u===v) return true;

        for(let n of graph[u]){
            if(dfs(n,v)){
                return true
            }
        }

        return false
    }

    for(let[u,v] of edges){
      if(graph[u].length && graph[v].length && dfs(u,v)) {
        return [u,v]
      }
      graph[u].push(v)
      graph[v].push(u)
    }

    return [];
}

console.log(RedundantGraph([[1,2],[1,3],[2,3]]))