const a = require.resolve('./a')
console.log(a)

const path = require('path')
const b = path.resolve('./a')
console.log(b)

const c = path.resolve(__dirname, './a')
console.log(c)