
module.exports = function(sourceCode){
    const options = this.getOptions()
    return sourceCode.replace(new RegExp(options.changeVar,'g'), 'var')
}