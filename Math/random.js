// random color 
// 16进制，6位
function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0')
}

// 36进制包含了10个数字和26个字母
// 但是maxLen = 11 
function getStr(len) {
    return Math.random().toString(36).slice(2, len + 2).padEnd(len, '0')
}

// 如何解除maxLen = 11 ？ 递归
function getStr_2(len = 6) {
    if (len <= 11) {
        return Math.random().toString(36).slice(2, len + 2).padEnd(len, '0')
    } else {
        // generate 11 + rest len
        return getStr_2(11) + getStr_2(len - 11)
    }
}


console.log(getStr_2())