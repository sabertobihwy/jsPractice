function method1(a, b) {
    console.log(this)
    return a + b
}

Function.prototype.myCall = function (ctx, ...args) {
    ctx = (ctx === null
        || ctx === undefined) ? globalThis : Object(ctx)
    const fn = this
    const key = Symbol('temp')
    Object.defineProperty(ctx, key, {
        value: fn,
        configurable: true,
        enumerable: false
    })
    var result = ctx[key](...args)
    delete ctx[key]
    return result

}

console.log(method1.myCall({}, 1, 2))