function* generater(str) {
    let r = ''
    for (const s of str) {
        if (s === '-') {
            yield r
            r = ''
        } else {
            r += s
        }
    }
    if (r !== '') {
        yield r
    }
}

function compare(s1, s2) {
    const i1 = generater(s1)
    const i2 = generater(s2)

    while (true) {
        let a = i1.next().value
        let b = i2.next().value
        if (!a && !b) {
            return 0
        }
        if (!a) {
            return -1
        }
        if (!b) {
            return 1
        }
        if (+a < +b) {
            return -1
        }
        if (+a > +b) {
            return 1
        }
    }

}

console.log(compare('1-6-3', '1-2-44'))
