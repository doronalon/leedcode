let waitTill = new Date(new Date().getMilliseconds() + 10000).getMilliseconds()
setTimeout(() => {
    console.log('setTimeout')
}, 5000)
console.log('a')
while(new Date().getMilliseconds() > waitTill){
    console.log(new Date().getMilliseconds() - waitTill)

}
console.log('b')