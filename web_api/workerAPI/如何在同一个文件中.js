/**
 *  如何让引用worker的js文件在同一个页面中？
 */

// 1. ObjectURl 本地临时url
const code = `console.log(1)`
const blob = new Blob([code], {
    type: 'application/javascript'
})
const url = URL.createObjectURL(blob)
//const worker = new Worker(url)

// 2. DataURL 字符串放进url里面
const dataUrl = `data:application/javascript;utf8,${code}`

// 工程化意义： 压缩的时候，把多个worker文件放到主线程同一个页面