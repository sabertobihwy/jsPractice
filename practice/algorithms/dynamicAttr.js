const add = new Proxy(
    {
        _store: 0
    },
    {
        get(target, propertyKey, receiver) {
            if (propertyKey === Symbol.toPrimitive) {
                return () => {
                    return target._store
                }
            }
            target._store += +propertyKey
            return receiver

        }
    })

const r1 = add[1][2][3] + 10
console.log(r1)