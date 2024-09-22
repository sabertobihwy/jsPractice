// 连续赋值
var a = { n: 1 }

var b = a
a.x = a = { n: 2 }

// a = { n:2 } 返回 {n:2}

console.log(a.x)
console.log(b.x)