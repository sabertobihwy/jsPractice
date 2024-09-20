import { singleton } from "./singleton.js"

class Video {
    constructor(name) {
        this.name = name
    }
}
const proxyV = singleton(Video)


export { proxyV as Video }