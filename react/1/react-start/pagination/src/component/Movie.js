import React from 'react'

export default function Movie(props) {
  return (
    <li>
      title: {props.title}
      rate: {props.rate}
    </li>
  )
}
