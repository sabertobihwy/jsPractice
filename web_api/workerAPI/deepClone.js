function deepClone(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel()
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            resolve(msg.data) // deepclone
        }
    })
}

// 无法解决循环引用的obj
function deepClone_1(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const obj1 = { a: 1, b: 1 }
obj1.c = obj1

deepClone(obj1).then(console.log)

