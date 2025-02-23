const controller = new AbortController()
const url = ''
fetch(url, {
    signal: controller
})

setTimeout(() => {
    controller.abort()
}, 1000)

async function fetchTimeout(url, options = {}, duration) {
    return new Promise((resolve, reject) => {
        const controller = new AbortController()

        fetch(url, {
            ...options,
            signal: controller
        }).then(resp => resolve(resp), err => reject(err))
        setTimeout(() => {
            controller.abort()
            reject("timeout")
        }, duration)
    })
}

function createFetch(timeout) {
    return (url, options = {}) => {
        const controller = new AbortController()
        options.signal = controller
        setTimeout(() => {
            controller.abort()
        }, timeout)
        return fetch(url, options)
    }
}