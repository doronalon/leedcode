function minimumOperations(nums: number[]): number {
    let index: number = 0
    while (nums.filter(element => element !== 0).length !== 0){
        let min: number = Math.min(...nums.filter(element => element !== 0));
        nums = nums.map((element)=> (element === 0) ? element : (element - min))
        index++
    }
    return index
};

console.log(minimumOperations([1,5,0,3,5]))