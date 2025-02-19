// function memo(fn) {
//     function _fn(obj) {
//         if (cache._map[obj] !== undefined) {
//             return cache._map[obj]
//         }
//         const result = fn(obj)
//         cache._map[obj] = result
//         return result

//     }
//     const cache = {
//         _map: {},
//         set: function (o, values) {
//             this._map[o] = values
//         }
//     }
//     _fn.cache = cache
//     return _fn
// }
// 不可以用object代替Map，因为属性必须是string | Symbol，object 会变成[Object, Object]
// Map 缺点： 键为object的时候，object=null 也不会GC
// WeakMap： 只能object当键，object=null就会GC
function isObject(obj) {
    console.log(Object.prototype.toString.call(obj))
    return Object.prototype.toString.call(obj) === '[object Object]'
}
class MemoMap {
    constructor() {
        this._map = new Map()
        this._wkMap = new WeakMap()
    }

    set(key, value) {
        if (isObject(key)) {
            this._wkMap.set(key, value)
        } else {
            this._map.set(key, value)
        }
    }
    has(key) {
        return this._wkMap.has(key) || this._map.has(key)
    }

    get(key) {
        if (isObject(key)) {
            if (this._wkMap.has(key)) {
                return this._wkMap.get(key)
            }
            return null
        } else {
            if (this._map.has(key)) {
                return this._map.get(key)
            }
            return null
        }
    }

}
function memo(fn, resolver) {
    if (typeof resolver !== 'function') {
        resolver = (a) => a
    }
    function _fn(...args) {
        const obj = resolver(...args)
        if (_fn.cache.has(obj)) {
            return _fn.cache.get(obj)
        }
        const result = fn.apply(this, args)
        _fn.cache.set(obj, result)
        return result

    }
    _fn.cache = new MemoMap()
    return _fn
}


const a = { a: 1, b: 2 }
const b = { a: 3, b: 4 }

const fn = memo((obj) => Object.values(obj))
console.log(fn(a))
// [1,2]
console.log(fn(b))
// [3,4]
a.a = 2
console.log(fn(a))
// [1,2]

fn.cache.set(a, ['a', 'b'])
console.log(fn(a))
// ['a','b']

const fn2 = memo((param, obj) => Object.values(obj).concat(param), (_, b) => b)
console.log(fn2(123, a))

console.log(isObject([]))

console.log(isObject(null))