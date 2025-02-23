import { singleton } from "./singleton.js"

class Video {
    constructor(name) { // js中没有private constructor
        this.name = name
    }
}
const proxyV = singleton(Video) // proxyV 等同于 Video构造函数


export { proxyV as Video }