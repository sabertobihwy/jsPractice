function isPlainObj(o) {
    return Object.prototype.toString.call(o) === '[object Object]'
}

function merge(object, source) {
    const result = { ...object };
    const skeys = Object.keys(source)
    skeys.forEach((key) => {
        if (isPlainObj(object[key] && isPlainObj(source[key]))) {
            result[key] = merge(object[key], source[key])
        } else {
            result[key] = source[key]
        }
    })
    return result
}

console.log(merge({ a: { b: 1 } }, { a: { c: 2 } }));
// { a: { b: 1, c: 2 } }

console.log(merge({ a: 1 }, { a: { b: 2 } }));
// { b: 2 } 覆盖1

console.log(merge({ a: { b: 1 } }, { a: 2 }));
// 2 覆盖对象