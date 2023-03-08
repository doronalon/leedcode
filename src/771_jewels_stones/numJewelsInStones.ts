/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels: string, stones: string) : number => {
    let result : number  = 0
    let jewelsArr: string []  =  jewels.split('')
    let stonesArr: string [] = stones.split('')

    for(let i: number = 0 ; i< jewelsArr.length; i++){
        for (let j: number = 0; j < stonesArr.length; j++) {
            if(jewelsArr[i] === stonesArr[j]){
                result++
            }
        }
    }
    return result

};

console.info(numJewelsInStones('Aa', 'aAAbbbb'))