const Anagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }
    const map = new Map();
    for(let char of str1) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(let char of str2) {
        if(!map.has(char)) {
            return false;
        }
        map.set(char, map.get(char) - 1);
        if(map.get(char) === 0) {
            map.delete(char);
        }
    }
    return map.size === 0;
}

const str1 = "listen";
const str2 = "silent";

console.log(Anagram(str1, str2)); // Output: true

