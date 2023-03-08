const removeElement = (nums: number[], value: number)  : number=> {
    let insertIndex: number = 0;
    for(let i: number = 0; i < nums.length; i++){
        if(nums[i] !== value){
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    console.info(nums.toString())
    return insertIndex;
};

console.info(removeElement([1,2,3,4,5], 3))