// 1. delay 返回一个任务

function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}

delay(1000).then(() => {
    console.log('finish')
})

// 2.应用：image元素两个事件，load在完成时触发，error失败时触发
function createImage(imgUrl) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        img.src = imgUrl
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(img)
        }
    })
}
createImage(url1).then(img => { }, img => { })

// 3.应用：异步加载arr数组到select元素
function getProvince() { }

getProvince.then((arr) => {
    const html = arr.map(p => `<option value="${p.value}">${p.label}</option> `)
        .join('')
}, (reason) => {

})

