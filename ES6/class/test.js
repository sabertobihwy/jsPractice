const obj = {
    name: 'obj',
    func1(){
        console.log(this.name)
    },
    func2: ()=>{
        console.log(this.name)
    }
}

obj.func1() // obj
obj.func2() // undefined 

const o = obj.func1
o() // undefined

