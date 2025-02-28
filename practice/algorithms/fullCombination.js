const arr = [
    { 字段1: '甲', 字段2: 'a', 字段3: 1 },
    { 字段1: '甲', 字段2: 'a', 字段3: 2 },
    { 字段1: '甲', 字段2: 'a', 字段3: 3 },
    { 字段1: '甲', 字段2: 'b', 字段3: 1 },
    { 字段1: '甲', 字段2: 'b', 字段3: 2 },
    { 字段1: '甲', 字段2: 'b', 字段3: 3 },

    { 字段1: '乙', 字段2: 'a', 字段3: 1 },
    { 字段1: '丙', 字段2: 'b', 字段3: 3 },

    { 字段1: '乙', 字段2: 'a', 字段3: 1 },
    { 字段1: '乙', 字段2: 'a', 字段3: 2 },
    { 字段1: '乙', 字段2: 'a', 字段3: 3 },
    { 字段1: '乙', 字段2: 'b', 字段3: 1 },
    { 字段1: '乙', 字段2: 'b', 字段3: 2 },
    { 字段1: '乙', 字段2: 'b', 字段3: 3 },

    { 字段1: '丙', 字段2: 'a', 字段3: 1 },
    { 字段1: '丙', 字段2: 'a', 字段3: 2 },
    { 字段1: '丙', 字段2: 'a', 字段3: 3 },
    { 字段1: '丙', 字段2: 'b', 字段3: 1 },
    { 字段1: '丙', 字段2: 'b', 字段3: 2 },
    { 字段1: '丙', 字段2: 'b', 字段3: 3 },

]

// 判断可能不唯一的数组是否是全组合
// 1. 去重: mapping 
// 2. 剩下长度 === 2*3*3？


function isFullCombination(arr) {
    // const dupCount = duplicateLines(arr)
    let dupCount = 0
    const set = new Set()
    //const sep = randomStr(5)
    let num = 0
    const mapping = new Map()
    const keyArr = [] // [new Set(),Set(),Set()]
    arr.forEach((item) => {
        // const str = Object.values(item).join(sep)
        let valStr = ""
        Object.keys(item).forEach((key, index) => {
            if (!keyArr[index]) {
                keyArr[index] = new Set()
            }
            keyArr[index].add(item[key])
            if (!mapping.has(item[key])) {
                mapping.set(item[key], num++)
            }
            valStr += mapping.get(item[key])
        })
        if (set.has(valStr)) {
            dupCount++;
        } else {
            set.add(valStr)
        }
    })
    const total = keyArr.reduce((a, b) => {
        return a * b.size
    }, 1)
    console.log(mapping)
    return total === arr.length - dupCount

}

console.log(isFullCombination(arr))