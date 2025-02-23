const compare = require('./shallowCompare.js')

const cache = new Map()
// key is array
function getCache(argsArr) {
    const keys = [...cache.keys()] // [[1,2,3]]
    const key = keys.find(arr => compare(arr, argsArr))
    if (key) {
        return cache.get(key)
    }
}

cache.set([1, 2, 3], 'aaaa')
console.log(getCache([2, 3, 4]))
console.log(getCache([1, 2, 3]))