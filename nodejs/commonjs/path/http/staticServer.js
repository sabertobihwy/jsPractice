const http = require('http')
const {URL} = require('url')
const path = require('path')
const fs = require('fs')

/**
 *  localhost:6000/index.html -> public/index.html
 *  localhost:6000/ -> public/index.html
 */
const server = http.createServer(handleReq)

server.on('listening',()=>{
    console.log("listening 6000")
})

server.listen(6000)

async function handleReq(req,res){
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const relativePath = parsedUrl.pathname.substring(1)
    const publicPath = path.resolve(__dirname,'../public')
    const filePath = path.resolve(publicPath,relativePath)
   // console.log(filePath)
   const info = await handlePage(filePath)
   if(info){
        res.write(info)
   }else{
        res.statusCode = 404
        res.write('resources not found')
   }
   res.end()
}

async function handlePage(filePath){
    try {
        const result = await fs.promises.readFile(filePath) 
        console.log('File exists');
        // exist => file
        return  result
      } catch (err) {
        // 文件不存在，检查是否是目录
        if (err.code === 'ENOENT'){
            try {
                const stats = await fs.promises.stat(filePath);
                if (stats.isDirectory()) {
                  console.log('It is a directory');
                  // check index.html
                  const path2 = path.resolve(filePath,'./index.html')
                  console.log(path2)
                  return await handlePage(path2)   
                } else {
                  return null
                }
              } catch (err) {
                console.log('Error checking file/directory:', err);
                return null
              }
        }else{
            return null
        }

    }
}