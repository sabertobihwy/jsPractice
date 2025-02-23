const p = new Product()
class Product {
    static count = 0

    constructor(name, unitPrice, number) {
        this.number = name
        this.unitPrice = unitPrice
        this.number = number
        Product.count++

    }
    // getter 属性是不可枚举的，定义在prototype上 => 等同于方法
    get totalPrice() {
        return this.number() + this.unitPrice
    }
    // 所有方法不可枚举，定义在prototype上
    increase() {
        this.number++
    }

}
