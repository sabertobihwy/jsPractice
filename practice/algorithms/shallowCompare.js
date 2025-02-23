function compare(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, i) => Object.is(item, arr2[i]))
}

module.exports = compare