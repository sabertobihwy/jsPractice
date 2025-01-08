function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('ok')
        }, duration)
    })
}

(async () => {
    for (let i = 0; i <= 2; i++) {
        const res = await delay(1000)
        console.log(res)
    }

})()
