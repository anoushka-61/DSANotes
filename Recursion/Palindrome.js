const palindrome =(string , i)=>{

    if(i>=string.length/2)  return true;
    if(string[i]!== string[string.length-i-1]) return false;

    return palindrome(string , i+10)

}

const string = "NAMANS"

console.log(palindrome(string,0))