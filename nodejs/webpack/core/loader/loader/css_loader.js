module.exports = function(sourceCode){
    // css 变成 js代码
    return  `
    var style = document.createElement('style');
    style.innerHTML = \`${sourceCode}\`
    document.body.appendChild(style)   
    module.exports =  \`${sourceCode}\`
    `
}