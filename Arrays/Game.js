//668. Kth Smallest Number in Multiplication Table
// Solved
// Hard
// Topics
// Companies
// Nearly everyone has used the Multiplication Table. The multiplication table of size m x n is an integer matrix mat where mat[i][j] == i * j (1-indexed).

// Given three integers m, n, and k, return the kth smallest element in the m x n multiplication table.


const Game =(m, n, k)=>{

    let low = 1 , high = m*n;

    while(low<high){
        let mid = Math.floor((low+high)/2)
        let count=0
        for (i=1;i<=m;i++){
            count+=Math.min(n,(mid)/i)
        }

        if(count<k){
            low=mid+1
        }
        else{
            high=mid
        }
    }
    return low;
}

console.log(Game(3,3,5))