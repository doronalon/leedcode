/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = (nums: number[]): number[] => {
    let newArray: number[] = []
    for (let i: number = 0; i < nums.length; i++) {
        newArray.push(nums[nums[i]])
    }
    return newArray
};

console.info(buildArray([3,2,0,1]))