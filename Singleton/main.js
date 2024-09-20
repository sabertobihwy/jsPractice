
import { Video } from "./video.js"

let v1 = new Video('v1')
let v2 = new Video('v2')

console.log(v1.name)
console.log(v2.name)
console.log(v1 === v2)

Video.prototype.number = 123

console.log(v1.number)


