import React, { Component } from 'react'
import Province from './Province'

export default class ProvinceLst extends Component {
    
  render() {
    const arr = this.props.arr.map((item,i) => <Province key={i} {...item} />)
    return (
      <ul>
        {arr}
      </ul>
    )
  }
}
