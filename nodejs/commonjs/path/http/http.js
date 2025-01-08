const http = require('http')

const request = http.request('http://duyi.ke.qq.com/',{
    method: 'GET'
},resp => {
    console.log(resp.statusCode)
    console.log(resp.headers)
    // 响应body需要通过流拿到
    let result = ''
    resp.on('data', chunk =>{
        result += chunk.toString('utf-8')
    })
    resp.on('end', ()=>{
        console.log(result)
    })
})

request.end() // send request body， get 请求不需要消息体，但是需要空两行