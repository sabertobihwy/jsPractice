"use strict"
// strict 下只限制变量的先定义再访问，function声明依然提升

var Product = (function () {
    function Product(name, unitPrice, number) {
        // 必须用new 调用constructor
        if (Object.getPrototypeOf(this) !== Product.prototype) {
            throw new Error('必须用 `new` 调用 Product()');
        }
        this.name = name
        this.unitPrice = unitPrice
        this.number = number
        Product.count++
    }
    // p.increase() => this === p
    // new p.increase() =>  this._proto_ === p.increase的prototype 
    Object.defineProperty(Product.prototype, 'increase', {
        enumerable: false,
        value: function () {
            if (Object.getPrototypeOf(this) === Product.prototype.increase.prototype) {
                throw new Error('不能用 `new` 调用 increase()');
            }
            this.number++
        }
    })

    Object.defineProperty(Product.prototype, 'totalPrice', {
        enumerable: false, // getter 属性是不可枚举的
        get: function () {
            return this.number() + this.unitPrice
        }
    })

    Product.count = 0 // static count 不会被实例继承。prototype上的会被所有实例share
    return Product

})()

new Product()





