function shuffle(array) {
    const result = [...array]
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)) // [0,i]
        // [result[i], result[j]] = [result[j], result[i]]
        const tmp = result[j]
        result[j] = result[i]
        result[i] = tmp
    }
    return result
}

console.log(shuffle([1, 2, 3, 4, 5]));
// 可能输出： [3, 1, 5, 4, 2]（每次都不同）

console.log(shuffle(['a', 'b', 'c', 'd', 'e']));
// 可能输出： ['c', 'e', 'b', 'a', 'd']
