function containsDuplicates(nums: number[], k: number): boolean {
    let map: Map<number, number> = new Map<number, number>()
    for (let i: number = 0; i < nums.length; i++){
        if (map.has(nums[i])) {
            if (Math.abs(map.get(nums[i]) - i) <= k){
                return true
            }
        }
        map.set(nums[i], i)
    }
    return false
};

console.log(containsDuplicates([0,1,2,3,4,0,0,7,8,9,10,11,12,1], 1))