function isEqual(value, other, cache1 = new WeakMap(), cache2 = new WeakMap()) {
    if (value === null && other === null) {
        return true
    }
    if (value === undefined && other === undefined) {
        return true
    }
    // basic
    if (typeof value !== 'object' || typeof other !== 'object') {
        return value === other
    }
    if (cache1.has(value) && cache2.has(other)) {
        return cache1.get(value) === other && cache2.get(other) === value
    }
    if (cache1.has(value) || cache2.has(other)) {
        return false
    }
    cache1.set(value, other)
    cache2.set(other, value)
    // pure object
    if (isPlainObject(value) && isPlainObject(other)) {
        const keys1 = Object.keys(value)
        const set = new Set(keys1)
        const keys2 = Object.keys(other)
        if (keys1.length !== keys2.length) {
            return false
        }
        if (!keys2.every((key2) => set.has(key2))) {
            return false
        }
        return !keys1.some((key) => {
            return !isEqual(value[key], other[key], cache1, cache2)
        })

    } else if (Array.isArray(value) && Array.isArray(other)) {
        if (value.length !== other.length) {
            return false
        }
        return !value.some((val, i) => {
            return !isEqual(val, other[i], cache1, cache2)

        })
    } else {
        return false
    }


}

function isPlainObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]'
}


const obj1 = {};
obj1.self = obj1;

const obj2 = {};
obj2.self = obj2;

console.log(isEqual(obj1, obj2)); // ✅ true（不会死循环，能正确判断）

const obj3 = { a: 1, b: 2 };
const obj4 = { a: 1, b: 2 };

console.log(isEqual(obj3, obj4)); // ✅ true（普通对象也正确）

const obj5 = { a: 1, b: obj3 };
const obj6 = { a: 1, b: obj4 };

console.log(isEqual(obj5, obj6)); // ✅ true（深层对象也正确）

const obj7 = { a: 1, b: { c: 2 } };
const obj8 = { a: 1, b: { c: 3 } };

console.log(isEqual(obj7, obj8)); // ❌ false（b.c 不一样）
