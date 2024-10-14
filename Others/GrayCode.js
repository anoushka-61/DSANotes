function grayCode(n) {
    let result = [];
    for (let i = 0; i < (1 << n); i++) {
        result.push(i ^ (i >> 1));  // XOR the number with itself shifted by 1 bit
    }
    return result;
}

let n = 3;
console.log(grayCode(n));  // Example for n = 3
