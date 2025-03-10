function pick(object, keys) {
    const obj = {}
    keys.forEach(k => {
        // 如何判定k存在于object的key中
        if (k in object) {
            obj[k] = object[k]
        }
    })
    return obj

}

console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c']));
// { a: 1, c: 3 }