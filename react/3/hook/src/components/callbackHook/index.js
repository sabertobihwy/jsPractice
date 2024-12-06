import { useState } from "react"

import React from 'react'

class Test extends React.PureComponent {
    render(){
        console.log('Child Render')
        return (
            <div>
              <h1>{this.props.text}</h1>
              <button onClick={this.props.onClick}>点击切换</button>
            </div>
          )
    }
}


export default function Parent(){
    console.log('Parent Render')
    const [txt, setTxt] = useState(123)
    const [n, setN] = useState(0)
    return (
        <div>
            <Test text={txt} onClick={()=>{
                setTxt(123)
            }} />
            <input type="number" value={n} onChange={e=>{
                setN(parseInt(e.target.value))
            }}/>
        </div>
    )
}