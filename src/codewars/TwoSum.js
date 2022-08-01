/**
 * LeetCode
 * My Solution
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} result
 */
export function twoSum(nums, target) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

/**
 * Best Solution
 * @param {number} nums
 * @param {number} target
 * @return {number[]}
 */
export function twosSum(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        console.log(comp[nums[i]]);
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i];
        }
        comp[target - nums[i]] = i;
    }
}
