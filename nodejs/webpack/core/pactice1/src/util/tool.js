 import { createNum } from "../page/createDom"
 import { getRandomColor } from "./color"

 export function isPrime(num){
    if(num < 2){
        return false
    }
    for(let i = 2; i<= num-1; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

export class CountNum{
    constructor(duration = 500){
        this.num = 1
        this.duration = duration
        this.timer = null
    }

    start(){
        this.timer = setInterval(()=>{
            console.log(this.num, isPrime(this.num))
            if(isPrime(this.num)){
                // set color 
                createNum(this.num, getRandomColor())
            }else{
                createNum(this.num)
            }

            this.num++
        },this.duration)
    }

    stop(){
        clearInterval(this.timer)
        this.timer = null
    }

}

export function getRandom(min, max){ // [0,max-min+1) + min = [min, max+1)
    return Math.floor(Math.random()*(max-min+1) + min) 
}

