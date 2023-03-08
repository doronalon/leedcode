/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = (s: string) : number => {
    let array = s.trim().split(' ')
    return array[array.length-1].length
};

console.info(lengthOfLastWord(" hi doron ddd "))