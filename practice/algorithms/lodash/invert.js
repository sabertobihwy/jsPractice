function invert(object) {
    const obj = {}
    Object.entries(object).forEach(([k, v]) => {
        obj[v] = k
    })
    return obj
}

console.log(invert({ a: 1, b: 2, c: 1 }));
// { '1': 'c', '2': 'b' } ✅ 如果多个键有相同的值，保留最后一个键
