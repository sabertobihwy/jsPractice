import React, { Component } from 'react'
import "./Modal.css"

export default class Modal extends Component {
    defaultProps = {"background-color": "rgba(0, 0, 0, 0.5)"}

    handleOnClick = (e)=>{
      if(e.target.className === 'modal_parent'){
        this.props.onClick()
      }
    }

  render() {
    const styleProps = Object.assign(this.defaultProps, this.props.style)
    return (
      <div className="modal_parent" style = {styleProps} onClick={this.handleOnClick}>
        <div className='modal_center'>
            {this.props.children}
        </div>
      </div>
    )
  }
}
