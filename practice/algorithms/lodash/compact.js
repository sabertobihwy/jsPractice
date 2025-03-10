// 移除数组中的 false、null、0、""、undefined 和 NaN 值。
function compact(arr) {
    // return arr.filter(item => item)
    return arr.filter(Boolean)
}


console.log(compact([false, null, 0, "", undefined, NaN, 1]))
console.log(compact([0, 1, false, 2, '', 3])); // [1, 2, 3]
