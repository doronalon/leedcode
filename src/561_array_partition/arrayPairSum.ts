function arrayPairSum(nums: number[]): number {
    let sum : number = 0
    let arr : number[] = nums.sort((a,b) => a-b)
    for (let i: number = 0; i < nums.length;i = i + 2){
        sum += Math.min(arr[i], arr[i+1])
    }
    return sum
};

console.log(arrayPairSum([1,8,9,10,3,6]))