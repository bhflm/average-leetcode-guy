/*

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

*/

type TwoSum = [number, number];
type Target = number;


const isTarget = (target: Target, a: number, b: number): boolean => a + b === target;

function returnTwoSum(nums: number[],target: Target): number[]{
    // We're gonna store each two number index here
    const twoSum: number[] = [];
    let current = null;
    for (let index in nums) {
        const i = parseInt(index);
        if (!current) {
            current = i;
        }
        const candidate = nums[current] + nums[i+1];
        if (i < nums.length &&  candidate == target) {
            twoSum.push(current);
            twoSum.push(i+1);
            return twoSum;
        }
        current = i;
    };
    throw Error('Error, no twoSum detected');
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function main() {
    // const nums = [2,7,11,15], target = 9; // [0,1]
    // const nums = [3,2,4], target = 6; // [1,2]
    const nums = [3,3], target = 6 // [0,1]
    
    const twoSum = returnTwoSum(nums, target);
    console.log('twoSum: ', twoSum);
};

main();