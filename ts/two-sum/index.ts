/*

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

*/

// Complexity = o(Nˆ2), is not as efficient
function twoSum(nums: number[],target: number): (number[] | null ) {
    for (let i in nums) {
        for (let j in nums) {
                const next = parseInt(j) + 1;
                if (next != parseInt(i) && next < nums.length) {
                    if (nums[parseInt(i)] + nums[next] == target) {
                        return [parseInt(i), next];
                    } 
                }
            }
    };
    return null;
};

// This is o(n), uses a map, but more space
function optimizedTwoSum(nums: number[],target: number): (number[] | null ) {
    const map = new Map(); // { key = difference, value: index};
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        };
        map.set(diff, i);
    };
    return null;
}

function main() {
    // const nums = [2,7,11,15], target = 9; // [0,1]
    // const nums = [3,2,4], target = 6; // [1,2]
    const nums = [3,3], target = 6 // [0,1]
    // const nums = [3,2,3], target = 6 // [0,2]
    // const nums = [2,5,5,11], target = 10; // [1,2]
    
    const res = twoSum(nums, target);
    console.log('twoSum: ', res);
};

main();