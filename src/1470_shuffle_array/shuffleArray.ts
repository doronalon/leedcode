/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
let shuffle = (nums: number[], n: number): number[] => {
    let arr: number[] = []
    for(let i=0; i < n; i++){
        arr.push(nums[i])
        arr.push(nums[i+n])
    }
    return arr
};