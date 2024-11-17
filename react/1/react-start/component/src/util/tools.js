export function getRandom(min, max){
    return Math.floor(Math.random() * (max+1-min) + min ) // [0,max+1-min) + min -> [min, max+1)
}