const removeDuplicates = (nums: number[]) => {
    let insertIndex: number = 1;
    for(let i: number = 1; i < nums.length; i++){
        // We skip to next index if we see a duplicate element
        if(nums[i - 1] !== nums[i]){
            /* Storing the unique element at insertIndex index and incrementing
               the insertIndex by 1 */
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    console.info(nums.toString())
    return insertIndex;
};

console.info(removeDuplicates([1,1,1,1,2]))