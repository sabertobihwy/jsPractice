function deepClone(obj, cache = new WeakMap()) {
    if (obj === null) return null
    if (typeof obj !== 'object') return obj; // 处理基本数据类型（非对象）

    // 处理循环引用
    if (cache.has(obj)) {
        return cache.get(obj);
    }

    // 特殊对象
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Map) return new Map([...obj].map(([key, value]) => [deepClone(key, cache), deepClone(value, cache)]));
    if (obj instanceof Set) return new Set([...obj].map(value => deepClone(value, cache)));

    // 其他对象
    if (isPlainObject(obj)) {
        // object 
        const newObj = {}
        cache.set(obj, newObj); // 存入缓存，防止循环引用
        Object.keys(obj).forEach(k => {
            newObj[k] = deepClone(obj[k], cache)
        })
        return newObj
    } else if (Array.isArray(obj)) {
        const newArr = [];
        cache.set(obj, newArr);
        obj.forEach((item, index) => {
            newArr[index] = deepClone(item, cache);
        });
        return newArr;
    } else {
        return obj
    }
}

function isPlainObject(o) {
    return Object.prototype.toString.call(o) === '[object Object]'
}

const obj1 = { a: 1, b: 2 };
const clone1 = deepClone(obj1);
console.log(clone1);
// ✅ { a: 1, b: 2 } (基本对象拷贝)

console.log(clone1 !== obj1);
// ✅ true (确保是新对象)

console.log(clone1.a === obj1.a);
// ✅ true (值相等)

const obj2 = { a: { b: { c: 3 } } };
const clone2 = deepClone(obj2);

console.log(clone2);
// ✅ { a: { b: { c: 3 } } }

console.log(clone2 !== obj2 && clone2.a !== obj2.a && clone2.a.b !== obj2.a.b);
// ✅ true (深层对象也要创建新对象)

const arr = [1, [2, [3, 4]], 5];
const cloneArr = deepClone(arr);

console.log(cloneArr);
// ✅ [1, [2, [3, 4]], 5]

console.log(cloneArr !== arr && cloneArr[1] !== arr[1] && cloneArr[1][1] !== arr[1][1]);
// ✅ true (深层数组要创建新数组)

const date = new Date();
const cloneDate = deepClone(date);

console.log(cloneDate instanceof Date);
// ✅ true (克隆后的对象仍然是 `Date`)

console.log(cloneDate.getTime() === date.getTime());
// ✅ true (值相等)

// **测试循环引用**
const circularObj = { a: 1 };
circularObj.self = circularObj;
const circularClone = deepClone(circularObj);
console.log(circularClone.self === circularClone);  // ✅ true，成功处理循环引用