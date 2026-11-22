const ContainsDuplicateTwo = (nums, k) => {
    const set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
        if(set.size>k){
            set.delete(nums[i-k]);
        }
    }
    return false;
}

const nums = [1, 2, 3, 4, 5, 1];
const k = 3;

console.log(ContainsDuplicateTwo(nums, k)); // Output: false§