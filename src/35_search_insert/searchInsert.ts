/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums: number[], target: number): number => {
    let index : number = 0
    for (let i :number = 0; i < nums.length; i++){
        if(nums[i] === target){
            return i
        } else if(nums[i] < target){
            index = i
        }
    }
    return ++index
};

console.info(searchInsert([1,2 ,3 ,4, 5], 4))
console.info(searchInsert([1,3 ,4, 5], 2))