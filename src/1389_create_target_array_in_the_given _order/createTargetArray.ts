function createTargetArray(nums: number[], index: number[]): number[] {
    let targetArr: number[] = []
    for (let i: number = 0; i < nums.length; i++){
        targetArr.splice(index[i], 0 , nums[i])
    }

    return targetArr
};