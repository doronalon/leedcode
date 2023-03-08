function sortArrayByParity(nums: number[]): number[] {
    let arr: number [] = []
    for (let num of nums) {
        if (num % 2 === 0) {
            arr.unshift(num)
        } else {
            arr.push(num)
        }
    }
    return arr
};

console.log(sortArrayByParity([1,4,3,5,6,7]))