function groupBy(array, fn) {
    const obj = {}
    array.forEach((i) => {
        const key = fn(i)
        if (!(key in obj)) {
            obj[key] = []
        }
        obj[key].push(i)
    })
    return obj
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
// { '4': [4.2], '6': [6.1, 6.3] }