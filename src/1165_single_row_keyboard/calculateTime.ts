/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
const calculateTime = (keyboard: string, word: string): number => {
    let lastPlace: number = 0
    let time: number = 0
    let wordArr: string [] = word.split('')
    for(let index: number = 0; index<wordArr.length; index++){
        time += Math.abs(lastPlace -  keyboard.indexOf(wordArr[index]) )
        lastPlace = keyboard.indexOf(wordArr[index])
    }
    return time

};

console.info(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode'))