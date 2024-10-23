function func(arg1, arg2) {
    console.log(arg1, arg2)
}

function validatorFunc(func, ...types) {
    const p = new Proxy(func, {
        apply(target, thisArgs, argArray) {
            argArray.forEach((arg, i) => {
                if (typeof arg !== types[i]) {
                    throw new Error("type error")
                }
            })
            return Reflect.apply(target, thisArgs, argArray)
        }

    })
    return p
}

const f = validatorFunc(func, 'number', 'number')
f(1, 2)
f("a", "b")