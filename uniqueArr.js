/**
 *  去重：对象attr一致也算相同
 */

var arr = [1, 1, 2, 3, 4, 4, 4, 6, {
    1: 123,
    2: 345,
    4: 45
}, {
        1: 123,
        2: 345,
        4: 45
    }, {
        1: 123,
        2: 345,
        4: { 'a': 123, 'b': 'bbb' }
    }, {
        1: 123,
        2: 345,
        4: { 'a': 123, 'b': 'bbb' }
    }, {
        1: 123,
        2: 345,
        4: { 'a': 123, 'c': 'bbb' }
    }]

function uniqueArr(arr) {
    let result = []
    arr.forEach((item1) => {
        let isFind = false
        for (let i = 0; i < result.length; i++) {
            if (theSame(item1, result[i])) {
                isFind = true
            }
        }
        if (!isFind) {
            result.push(item1)
        }
    })
    return result
}

function theSame(item1, item2) {
    if (typeof (item1) !== typeof item2) {
        return false
    }
    // null & object 
    if (item1 === null && item2 === null) return true
    if (item1 === null || item2 === null) return false
    if (Array.isArray(item1)) {
        if (item1.length !== item2.length) {
            return false
        } else {
            for (let i = 0; i < item1; i++) {
                if (!theSame(item1[i], item2[i])) return false
            }
            return true
        }
    } else if (typeof (item1) === 'object') {
        if (Object.keys(item1).length !== Object.keys(item2).length) {
            return false
        }
        const item1Keys = Object.keys(item1)
        const item2Keys = Object.keys(item2)
        for (let i = 0; i < item1Keys.length; i++) {
            if (!item2Keys.includes(item1Keys[i])) return false
            if (!theSame(item1[item1Keys[i]], item2[item2Keys[i]])) return false
        }
        return true
    } else {
        return item1 === item2
    }
}

console.log(uniqueArr(arr))