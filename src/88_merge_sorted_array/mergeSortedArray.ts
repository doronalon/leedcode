/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let mergeSortedArray = (nums1 : number[], m: number, nums2: number[], n: number) :  void => {
    let newArray = nums1.slice(0, m).concat(nums2).sort()
    console.info(newArray)
};

mergeSortedArray([1,2,3,0,0,0],  3, [2,5,6],3)