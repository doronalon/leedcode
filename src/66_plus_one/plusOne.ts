/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = (digits: number[]): number[] => {

    // time complexity: O(N)
    // space complexity: O(1)

    for (let i = digits.length - 1; i > -1; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i] = digits[i] + 1
            return digits
        }
    }
    // if loop is through, but nothing returned yet, need to add another digit
    digits.unshift(1)
    return digits
}

console.info(plusOne([1, 9 , 8]))