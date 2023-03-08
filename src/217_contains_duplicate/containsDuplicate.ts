function containsDuplicate(nums: number[]): boolean {
  let map: Map<number, number> = new Map<number, number>()
    for (let num of nums){
        if (map.has(num)) {
            return true
        } else {
            map.set(num, num)
        }
    }
    return false
};

console.log(containsDuplicate([1,2,4,1,4]))