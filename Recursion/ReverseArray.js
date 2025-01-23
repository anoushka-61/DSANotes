const swap = (arr, l, r) => {
    let t = arr[l];
    arr[l] = arr[r];
    arr[r] = t;
};

const reverseArray = (i, n, a) => {
    if (i >= n) return; 
    swap(a, i, n);      
    reverseArray(i + 1, n - 1, a); 
    return a; 
};

const n = 5;
const array = [1, 2, 3, 4, 5];

console.log("Original Array:", array);
console.log("Reversed Array:", reverseArray(0, n - 1, array));
