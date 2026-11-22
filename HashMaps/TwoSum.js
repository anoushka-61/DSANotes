//You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 



const TwoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

const nums = [2, 7, 11, 15];
const target = 13;

console.log(TwoSum(nums, target)); // Output: [0, 2]