const fs = require('fs')
const path = require('path')

async function test(){
    const fromFilename = path.resolve(__dirname, './myfileTest/image.png')
    const buffer = await fs.promises.readFile(fromFilename)
    const toFilename = path.resolve(__dirname, './myfileTest/image copy.png')
    fs.promises.writeFile(toFilename, buffer)
}

 async function readDir(from){
   // const from = path.resolve(dirpath, dirName)
    const result = await fs.promises.readdir(from)
    for(const res of result){
        const absPath = path.resolve(from, res)
        const stat = await fs.promises.stat(absPath)
        if(stat.isFile()){
            const content = await fs.promises.readFile(absPath,'utf-8')
            console.log(content)
        }else{
            readDir(absPath)
        }
    }
}
//readDir(path.resolve(__dirname, './myfileTest/folder'))
//test()

async function test(){
    try {
        const fileName = path.resolve(__dirname, './public/index.html')
        console.log(fileName)
       // const content = await fs.promises.readFile(fileName,'utf-8')
        console.log(content)
    } catch (error) {
        console.log("?")
    }
}
test()