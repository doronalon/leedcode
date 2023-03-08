/**
 * @param {number[]} nums
 * @return {number}
 */
let numIdenticalPairs = (nums: number[]): number => {
    let result: number = 0
    for(let i: number = 0; i< nums.length; i++){
        for(let j:number = i+1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                ++result
            }
        }
    }
    return result
};