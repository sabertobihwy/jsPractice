function flattenDeep(array) {
    const result = []
    function _m(ar) {
        if (!Array.isArray(ar)) {
            result.push(ar)
            return
        }
        for (let i = 0; i < ar.length; i++) {
            _m(ar[i])
        }
    }
    // array.forEach(i => _m(i))
    _m(array)
    return result
}

console.log(flattenDeep([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
