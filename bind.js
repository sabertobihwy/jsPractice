function fn(...args) {

    console.log(this + args)
}

Function.prototype.myBind = function () {
    var ctx = Array.prototype.slice.apply(arguments, [0, 1])
    var args1 = Array.prototype.slice.apply(arguments, [1])
    var fn = this
    console.log(`this: => ${fn}`)
    return function A() {
        var args2 = Array.prototype.slice.apply(arguments, [0])
        // new A(); 当调用构造函数的时候，this = function(){}
        if (Object.getPrototypeOf(this) === A.prototype) {
            //  return new fn(...args1, ...args2)
            //或者：曲线实现new fn()
            var obj = {}
            Object.setPrototypeOf(obj, fn.prototype)
            fn.call(obj, ...args1, ...args2)
            return obj
        } else { // A()
            return fn.call(ctx, ...args1, ...args2)
        }

        // const key = Symbol('temp')
        // Object.defineProperty(ctx, key, {
        //     value: fn,
        //     configurable: true,
        //     enumerable: false
        // })
        // var allArgs = args1.concat(args2)
        // var result = ctx[key](allArgs)
        // delete ctx[key]
        // return result
    }
}

const newfn = fn.myBind('ctx', 1, 2)
new newfn(3, 4)