const reverse = (n, result = 0) => {
    if (n === 0) return result; // Base case: when the number is 0, return the accumulated result
    return reverse(Math.floor(n / 10), result * 10 + (n % 10));
  };
  
  // Example usage:
  const reversedNumber = reverse(134);
  console.log("Reversed:", reversedNumber);
  