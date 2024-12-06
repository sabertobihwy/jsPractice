import React from 'react'
import useTimer from './useTimer'
import {useState} from 'react'


export default function Test() {
    const [visible, setVi] = useState(true)
  return (
    <>
        {visible && <Test2 />}
        <button onClick={()=>{
            setVi(!visible)
        }}>显示/隐藏</button>
    </>

  )
}

function Test2(){
    const [value, setVal] = useState(0)
    useTimer(()=>{console.log(1)}, 1000)
    return (<div>print {value}</div>)
}