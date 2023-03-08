/**
 * @param {number[]} nums
 * @return {number[]}
 */
let getConcatenation = (nums: number[]): number[] => {
    return nums.concat(nums)
};

console.info(getConcatenation([1, 2, 3]))