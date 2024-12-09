import React, { Component } from 'react'

let timer1 ; let timer2;

export function withScroll(Comp){
    return class extends Component {

        componentDidMount(){
           // window.scrollTo(0,0)
           reset()
        }

        render() {
          return (
           <Comp {...this.props}/>
          )
        }
      }
}

export function reset(){
    var html = document.documentElement
    animate(timer1,html.scrollTop,0,1000,(val)=>{
        html.scrollTop = val
    })
    animate(timer2,html.scrollLeft,0,1000,(val)=>{
        html.scrollLeft = val
    })
}

function animate(timer,start, end, duration,callback){
    clearInterval(timer)
    const tick = 16
    const times = Math.ceil(duration / tick ) 
    const disPerTime = (end-start) / times 
    let time = 0
    timer = setInterval(()=>{
        time++
        start += disPerTime
        if(time === times){
            start = end 
            clearInterval(timer)
        }
        callback(start)
    },tick)
}

