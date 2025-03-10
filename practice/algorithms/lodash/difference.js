function difference(array, values) {
    const valueSet = new Set(values)
    return array.filter(i => !valueSet.has(i))
}

console.log(difference([1, 2, 3, 4], [2, 4])); // [1, 3]
