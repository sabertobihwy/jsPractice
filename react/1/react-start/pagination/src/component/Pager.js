import React from 'react'
import '../css/pager.css'

export default function Pager(props) {
    

  return (
    <div className={props.className + " test"} onClick={props.onClick}>
      {props.text }
    </div>
  )
}
