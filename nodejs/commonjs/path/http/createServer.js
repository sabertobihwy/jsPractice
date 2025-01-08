const http = require('http')
const url = require('url')

function handleReq(req){
    console.log("有请求来了")
    // 请求body是流一样的传过来
    let body = ''
    req.on('data', chunk =>{
        body += chunk.toString('utf-8')
    })
    req.on('end', ()=>{
        console.log(body)
    })
}

const server = http.createServer((req, res)=>{
	handleReq(req)
    res.setHeader('a','1')
    res.setHeader('b','2')
    res.statusCode = 404 
    res.write('hello!!')
    res.end()
})

server.listen(9527)