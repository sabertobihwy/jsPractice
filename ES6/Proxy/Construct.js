function constructProxy(Class, ...attrNameList) {
    return new Proxy(Class, {
        construct(target, argValueArray) {
            const obj = Reflect.construct(target, argValueArray)
            attrNameList.forEach((name, i) => {
                obj[name] = argValueArray[i]
            })
            return obj
        }
    })

}

class Monster { }
const m = constructProxy(Monster, 'name', 'age')
const obj = new m('hwy', 12)