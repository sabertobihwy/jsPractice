var str = 'mY fiRst nAme'


function eachFirstLetterUp(str) {
    // \b: is 单词边界
    // \S 非空字符
    return str.replace(/\b(\w)(\w+)?\b/g, function ($, $1, $2) {
        // $ global 
        // $1 第一个捕获组
        //  console.log($, $1, $2) // mY m Y 
        return $1.toUpperCase() + $2
    })
}

function otherLetterLower(str) {
    return str.replace(/\b(\w)(\w+)?\b/g, function ($, $1, $2) {
        return $1 + $2.toLowerCase()
    })
}

function removeSpaces(str) {
    return str.replace(/\s+/g, '')
}

function firstLetterLower(str) {
    return str.replace(/\w/, function ($) {
        return $.toLowerCase()
    })
}