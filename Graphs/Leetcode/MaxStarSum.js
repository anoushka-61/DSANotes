var maxStarSum = function(vals, edges, k) {
    let n = vals.length;
    let adjList = Array.from({ length: n }, () => []);

    for (let [u, v] of edges){
        adjList[u].push(v);
        adjList[v].push(u);
    }
    
    let res = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        let a = adjList[i].map(x => vals[x]).sort((a, b) => b - a);
        let sum = vals[i];
        let count = 0;
        for(let x of a){
            if(x > 0 && count < k){
                sum += x;
                count++;
            }else break;
        }

        res = Math.max(res, sum);
    }
    
    return res;

};

// Example usage
const vals = [-514, 2094, -271, 2178, -2409, 332, 618, 179, 2441, 73, -1941, -1352, -223, 939, 575, 430, 1429, 2020, -1911, -559, -1259, 654, -1683, -20, 2036, -1612, -59, -1503, 748, -104, 2353, -1618, 1192, -1563, 2024, 1449, 734, -534, -524, 1993, 1724, 345, -1071, -267, -205, -54, -2252, 953, 2323, -1399];
const edges = [[44, 18], [23, 9], [6, 36], [39, 30], [22, 24], [9, 32], [15, 48], [29, 33], [30, 5], [15, 0], [7, 21], [45, 18], [7, 11], [30, 26], [40, 35], [28, 41], [13, 22], [9, 20], [42, 43], [19, 36], [12, 2], [26, 11], [33, 12], [37, 24], [7, 15], [28, 36], [32, 0], [3, 28], [14, 16], [41, 37], [26, 27], [8, 35], [40, 19], [1, 7], [36, 27], [4, 21], [36, 22], [11, 45], [18, 32], [27, 31], [8, 36], [4, 46], [8, 0], [41, 40], [18, 5], [7, 32], [0, 40], [12, 46], [1, 23], [11, 19], [42, 17], [11, 2], [34, 16], [9, 45], [32, 39], [43, 47], [17, 29], [47, 19], [4, 19], [35, 43], [10, 18], [10, 44], [35, 38], [26, 47], [29, 46], [4, 6], [14, 36], [40, 7], [8, 22], [27, 4], [0, 30], [45, 19], [13, 31], [21, 14], [11, 18], [23, 20], [9, 25], [16, 11], [35, 6], [21, 16]];
const k = 4;

console.log(maxStarSum(vals, edges, k)); // Output: Expected 11389
