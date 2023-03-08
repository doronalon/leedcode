/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) : number[]=> {
    let map: Map<number, number> = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target -nums[i])){
            return [map.get(target-nums[i]), i]
        }
        map.set(nums[i], i);
    }

    return null


};

console.info(twoSum([0,3,3], 6))