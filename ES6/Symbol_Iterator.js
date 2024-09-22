// 如何让以下代码成立
var [a, b] = { a: 1, b: 2 }

// 需要满足可迭代协议：{
//     [Symbol.iterator] : function () {
//         return iterator
//     }
// }

Object.prototype[Symbol.iterator] = function () {
    // iterator 
    return Object.values(this)[Symbol.iterator]()
}