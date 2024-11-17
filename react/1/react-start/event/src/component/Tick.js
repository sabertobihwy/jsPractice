import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        number: this.props.number,
    }

    constructor(props){
        super(props)
        const timer = setInterval(()=>{
            this.setState({
                number: this.state.number - 1
            })
            if(this.state.number === 1){
                clearInterval(timer)
                this.props.onOver && this.props.onOver()
            }
        },300)
    }
  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.state.number}
      </button>
    )
  }
}
