import React from 'react';
import ReactDOM from 'react-dom/client';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './index.css' // 不记得引用css的原理了


const src_arr = [src1, src2, src3]
const rootDom = document.getElementById('root')
const root = ReactDOM.createRoot(rootDom);
let index = 0
let timer = ""

function render(){
    const div = (
        <div className='box'><img src={src_arr[index]} alt="" /></div>
    )
    root.render(div)
}

function start(){
    stop()
    timer = setInterval(()=>{
        index = (index + 1) % 3
        render()
    },1000)
}

function stop(){
    if(timer){
        clearInterval(timer)
    }
}

function registerEvent(){
    rootDom.onmouseenter = function(){
        stop()
    }
    rootDom.onmouseleave = function(){
        start()
    }
}
render()
start()
registerEvent()
