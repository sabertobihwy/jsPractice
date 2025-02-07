const o = (function (){
    const obj = {
        a: 1,
        b: 2
    }
    return {
        get: function(x){
            return obj[x]
        }
    }

})()

Object.defineProperty(Object.prototype, 'hack', {
    get: function(){
        return this 
    }

})

const obj = o.get('hack')
console.log(obj)

// const a = o.get('valueOf')
// console.log(a())

// const c = {}
// console.log(c.valueOf())
