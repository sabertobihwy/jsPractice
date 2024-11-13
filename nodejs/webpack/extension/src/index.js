const src = require('./assets/image.png').default

console.log(src)
const img = document.createElement('img')
img.src = src
document.body.appendChild(img)