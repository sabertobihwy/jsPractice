const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, './myfileTest/write/file.js')
const ws = fs.createWriteStream(filePath,{
    encoding: 'utf-8',
    highWaterMark: 3
})
let bool = ws.write('a')
console.log(bool)
bool = ws.write('bc')
console.log(bool)
bool = ws.write('d')
console.log(bool)