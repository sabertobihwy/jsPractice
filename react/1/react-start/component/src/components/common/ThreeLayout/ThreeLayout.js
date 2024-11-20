import React, { Component } from 'react'
import './index.css'

export default class ThreeLayout extends Component {
    defaultOptions = {
        minWidth: 500,
        leftWidth: 100,
        rightWidth: 100
    }

  render() {
    const options = Object.assign({},this.defaultOptions,this.props)
    return (
      <div className="container" style={{
        minWidth: options.minWidth
      }}> 
        <div className='main' ></div>
        <div className='left' style={{
        width: options.leftWidth,
        'margin-right':this.props.gap || 0
      }}></div>
        <div className='right' style={{
        width: options.rightWidth,
        'margin-left':this.props.gap || 0
      }}></div>
      </div>
    )
  }


}
