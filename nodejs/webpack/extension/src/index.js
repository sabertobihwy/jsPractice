const src = require('./assets/image.png').default

console.log(src)
const img = document.createElement('img')
img.src = src
document.body.appendChild(img)

async function test() {
    const resp = await fetch("/api/local")
    const json = await resp.json()
    console.log(json)
}
test()