import { getRandom } from "./tool"
const colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];

export function getRandomColor(){
    return colors[getRandom(0,colors.length-1)]
}