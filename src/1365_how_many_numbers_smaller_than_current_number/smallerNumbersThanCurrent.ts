/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = (nums: number[]): number[] => {
    let numSmaller: number[] = []
    for (let i: number = 0; i < nums.length; i++) {
        let num: number = 0
        for (let j: number = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                num++
            }
            if (j === nums.length- 1) {
                numSmaller.push(num)
            }
        }
    }
    return numSmaller
};

console.info(smallerNumbersThanCurrent([7,7,7,7]))