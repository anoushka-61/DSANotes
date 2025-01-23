const sum = (n) => {
    if (n === 0) return 0;
    return (n % 10) + sum(Math.floor(n / 10)); }
  
  const ans = sum(1342);
  
  console.log("ans", ans);
  