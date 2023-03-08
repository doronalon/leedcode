function sleeping(ms) {
    return new Promise((resolve) => setTimeout(() => {
        resolve('done')
        return
    }, ms));
}

((ms) => {
    return new Promise(async (resolve) => {
        console.log(new Date().toISOString())
        await sleeping(ms)
        console.log(new Date().toISOString())
    })
})(1000)

