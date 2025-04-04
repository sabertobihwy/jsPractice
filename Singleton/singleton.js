// export function singleton(className) {
//     let v
//     return class A {
//         constructor(...args) {
//             if (!v) {
//                 v = new className(...args)
//             }
//             return v
//         }
//     }
// }

export function singleton(className) {
    let v
    return new Proxy(className, { // 相当于修改行为后的className这个类
        construct(target, args) { // target 是 被代理的构造函数
            if (!v) {
                v = new target(...args)
            }
            return v
        }
    })
}

