// 连续赋值
var a = { n: 1 }

var b = a
a.x = a = { n: 2 }

// a = { n:2 } 返回 {n:2}

console.log(a.x)
console.log(b.x)

// 先定位赋值，再右边计算表达式
// 1. a.x 找到在哪里开辟x  2. a =  3. {n: 2}