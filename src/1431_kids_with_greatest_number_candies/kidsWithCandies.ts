/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = (candies: number [], extraCandies: number) : boolean[] =>{
    const max = Math.max(...candies)
    return candies.map(item => item + extraCandies >= max)
};

console.info(kidsWithCandies([2,3,5,1,3], 3))