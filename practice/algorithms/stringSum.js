function sum(s1, s2) {
    const len = Math.max(s1.length, s2.length)
    const _s1 = s1.padStart(len, '0')
    const _s2 = s2.padStart(len, '0')
    let i = len - 1
    let carry = 0
    const result = []
    while (i >= 0) {
        let cur = +_s1[i] + +_s2[i] + carry
        if (cur > 9) {
            carry = 1
        } else {
            carry = 0
        }
        cur = cur % 10
        i--
        result.unshift(cur)
    }
    if (carry === 1) {
        result.unshift(carry)
    }
    return result.join('')
}

console.log(sum('9999', '9881'))