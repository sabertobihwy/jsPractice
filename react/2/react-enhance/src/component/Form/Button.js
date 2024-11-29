import React, { Component } from 'react'
import { Consumer } from './ctx'

export default class Button extends Component {
  render() {
    return (
      <Consumer>
        {value =>{
            return (
                <>
                <button {...this.props} onClick={()=>{value.onSubmit(value.data)}}>
                    {this.props.children}
                </button>
                </>
            )
        }}
      </Consumer>
    )
  }
}
