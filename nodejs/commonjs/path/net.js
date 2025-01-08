const net = require('net')
const socket = net.createConnection({
	host: 'duyi.ke.qq.com',
	port: 80
},()=>{
	console.log('socket built')
})

socket.on('data', chunk => {
	console.log(chunk.toString('utf-8'))
    socket.end()
})

socket.write(`GET / HTTP/1.1
    Host: duyi.ke.qq.com
    Connection: close
    
    
    
    `);