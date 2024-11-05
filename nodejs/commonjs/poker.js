class poker{
    constructor(color, number){
        this.color = color
        this.number = number
    }
    toString(){
        let str = ""
        if(this.color === 1){
            str = "♣"
        }else if(this.color === 2){
            str = "❤"
        }else if(this.color === 3){
            str = "不可"
        }else if(this.color === 4){
            str = "♣"
        }
        if(this.number >=2 && this.number <= 10){

        }else if(this.number === 11 ){

        }else if(this.number === 12 ){

        }else if(this.number === 13 ){

        }else if(this.number === 14 ){

        }else if(this.number === 15 ){

        }
    }
}