const fibonacci = (n) => {
    if (n <= 1) return n; // Base case
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
};

// Input Handling (hardcoded or use readline for Node.js)
const n = 4; // Replace with user input logic if needed




    console.log(fibonacci(n)); // Print the Fibonacci value for the (i-1)th term

