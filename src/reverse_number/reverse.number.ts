let reverseNumber = (num: number) : number => {
    let reversNum: number = 0
    while (Math.floor(num / 10) != 0) {
        reversNum = reversNum * 10 + num % 10;
        num = Math.floor(num / 10)
        console.info(reversNum)
    }
    return reversNum * 10 + num
}

console.info(`result: ${reverseNumber(1234)}`)