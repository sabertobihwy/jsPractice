import $ from "jquery"
import { getRandom,isPrime } from "../util/tool"

export function createNum(num, color = 'white'){
   $('<span>').text(num).prop('style',`color:${color}`).appendTo("#app")
   $('.center').remove()
   if(isPrime(num)){
    const span = $('<span>').text(num).addClass('center')
    .css({
        color: color,
    }).appendTo("#app")

    getComputedStyle(span[0]).left
    span.css({
        transform: `translate(${getRandom(-200, 200)}px, ${getRandom(-200, 200)}px)`,
        opacity: 0
    })

   }else{
        $('<span>').text(num).addClass('center').prop('style',`color:${color}`).appendTo("#app")
   }
   
}

