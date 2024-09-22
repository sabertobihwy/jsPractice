var o = (function () {
    var obj = {
        a: 1,
        b: 2
    }
    return {
        get: function (attrName) {
            return obj[attrName]
        }
    }
})()

// 闭包漏洞： 如何在不改代码的情况下，篡改obj的数据

var o1 = o.get('a') // obj['a']
console.log(o1)

// 可不可以用Object的valueOf()获得obj
//console.log(o.get('valueOf')())
// 相当于 调用 Object.prototype.valueOf = function (){}
// valueOf() 并没有this对象绑定

// 如何能通过obj[]访问到一个方法，这个方法给我返回this
// 给属性定义一个get访问器，访问abc的时候调用get()
Object.defineProperty(Object.prototype, 'abc', {
    get() {
        return this // 
    }
})
// 修改了闭包中的数据
var o2 = o.get('abc')['a'] = 2
console.log(o.get('a'))