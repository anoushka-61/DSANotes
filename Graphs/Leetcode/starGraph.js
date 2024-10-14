//There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

const starGraph =(edges)=>{
 const [u1 , v1 ] = edges[0]
 const [u2, v2]= edges[1]

  if(u1===u2||u1===v1){
    return u1 ;
  }
    else {
    return v1;
  }
}
const edges = [[1,2],[2,3],[4,2]];
console.log(starGraph(edges));