import React, { Component } from 'react'

export default class NumberInput extends Component {
    state = {
        val: 1
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.val} onChange={(e)=>{
            this.setState({val: e.target.value.replace(/\D/g,'')})
        }}></input>
      </div>
    )
  }
}
