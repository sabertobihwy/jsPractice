import $ from "jquery"
import {CountNum} from "../util/tool"

const n = new CountNum()
n.start()

let on = true
$(window).on('click',function(){
    if(on){
        n.stop()
    }else{
        n.start()
    }
    on = !on
})