var arr = [1, 1, 2, 2, 3]
arr = [7, 3, 4, 5, 4, 5, 3]

// 只有一个数字出现了一次
//arr.sort() 不需要sort，因为^满足乘法交换律和结合律
function uniqueNumber(arr) {
    return arr.reduce((a, b) => a ^ b, 0)
}

console.log(n)