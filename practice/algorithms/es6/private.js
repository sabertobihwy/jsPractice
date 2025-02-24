// 考虑强约束力 + compatibility
const map = new WeakMap()

export class Product {
    constructor() {
        map.set(this, {
            privateKey: 1
        })
    }

    increase() {
        return map.get(this).privateKey
    }
}