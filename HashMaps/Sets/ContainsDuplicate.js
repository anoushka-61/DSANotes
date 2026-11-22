 const ContainsDuplicate = (nums) => {
    const set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
 }

 const nums = [1, 2, 3, 4, 5, 1];
 console.log(ContainsDuplicate(nums)); // Output: true
