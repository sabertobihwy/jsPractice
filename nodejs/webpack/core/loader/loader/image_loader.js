const loadUtils = require('loader-utils')
function loader(buffer){
    // limit <= 2000 : base64
    // else: fileName
    const {limit = 1000, fileName} = this.getOptions()
    let src = ""
    if(buffer.byteLength <= limit){
        // base64
        src = ToBase64(buffer)
    }else{
        // load-utils
        src = getFilePath.call(this,fileName, buffer)
    }
    return `module.exports = \'${src}\'`  // !
}   

function ToBase64(buffer){
    return `data:image/png;base64,` + buffer.toString('base64') 
}

function getFilePath(fileName, buffer){
    const newName = loadUtils.interpolateName(this,fileName, {
        content: buffer
    })
    this.emitFile(newName, buffer)
    return newName
}

loader.raw = true
module.exports = loader