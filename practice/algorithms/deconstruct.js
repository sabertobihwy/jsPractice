const [a,b] = {
    a:3,
    b:4,
    [Symbol.iterator](){
        const keys = Object.keys(this)
        const iterator = keys[Symbol.iterator]()
        return {
            next:()=>{
                const {value,done} = iterator.next()
                return {
                    done: done,
                    value: this[value]
                }
            }
        }
    }
}
console.log(a,b)

