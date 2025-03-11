function zip(...arr) {
    if (arr.length === 0) return []
    const maxLength = arr.reduce((a, b) => { return Math.max(b.length, a) }, 0)
    const result = Array.from({ length: maxLength }, () => [])
    for (let i = 0; i < arr.length; i++) {
        for (let index = 0; index < maxLength; index++) {
            result[index].push(arr[i][index])
        }
    }
    return result
}

console.log(zip(['a', 'b'], [1, 2], [true, false]));
// ✅ [['a', 1, true], ['b', 2, false]]

console.log(zip(['a', 'b', 'c'], [1, 2]));
// ✅ [['a', 1], ['b', 2], ['c', undefined]]

console.log(zip([1, 2, 3], ['x', 'y'], [true]));
// ✅ [[1, 'x', true], [2, 'y', undefined], [3, undefined, undefined]]

console.log(zip(['one', 'two'], [1, 2, 3], ['x', 'y', 'z']));
// ✅ [['one', 1, 'x'], ['two', 2, 'y'], [undefined, 3, 'z']]

console.log(zip([]));
// ✅ [] (空数组输入应返回空数组)

console.log(zip([], []));
// ✅ [] (多个空数组输入应返回空数组)

console.log(zip([1, 2, 3], []));
// ✅ [[1, undefined], [2, undefined], [3, undefined]]
