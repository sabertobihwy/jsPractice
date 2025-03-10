function chunk(array, size) {
    if (size <= 0) {
        return []
    }
    const result = []
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }
    return result
}

console.log(chunk([2, 4, 5, 4, 3, 3, 54], 3))