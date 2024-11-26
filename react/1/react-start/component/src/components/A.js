import React, { Component } from 'react'

export  class A extends Component {
  render() {
    return (
      <div>
        <button>A {this.props.a}</button>
      </div>
    )
  }
}


export class B extends Component {
    render() {
      return (
        <div>
          <button>B {this.props.a}</button>
        </div>
      )
    }
  }
