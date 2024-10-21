// 665. Non-decreasing Array
// Solved
// Medium
// Topics
// Companies
// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

const NonDecreasing =(nums)=>{
    let count =0;

    for(i=0; i<nums.length; i++){
        if(nums[i] > nums[i+1]){
            count++;
            if(count > 1) return false;
            if(i>0 && nums[i - 1] > nums[i + 1]){
                nums[i+1]= nums[i]
            }
        }
    }
    return true;
}

console.log(NonDecreasing([4,2,3]))

