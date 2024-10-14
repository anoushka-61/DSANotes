
const isBipartite =(graph)=>{
const queue=[];
const color = new Array(graph.length).fill(-1)
//IsBipartite -> if a node is connected to more than 3
for(let i=0; i<graph.length; i++){
  if(color[i]===-1){
    color[i]=0;
    queue[i]=i;

    while(queue.length){

        const current = queue.shift();

        if(graph[current]){
            for(let neighbours of graph[current]){
                if(color[neighbours]===-1){
                   color[neighbours]=1-color[current]
                   queue.push(neighbours)
                }
                else if( color[neighbours]===color[current]){
                    return false
                }
            }
        }
    }

  }
}

return true;
}

console.log(isBipartite([[1,2,3],[0,2],[0,1,3],[0,2]]))
console.log(isBipartite([[1,3],[0,2],[1,3],[0,2]]))

