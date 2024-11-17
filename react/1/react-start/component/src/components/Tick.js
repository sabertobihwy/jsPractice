import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        left : this.props.time
    }
    constructor(props){
        super(props)
        this.timer = setInterval(() => {
            this.setState({
                left: this.state.left -1 
            })
            if(this.state.left === 1){
                clearInterval(this.timer)
            }
        }, 1000);
    }
  render() {
    return (
      <div>
        倒计时：{this.state.left}
      </div>
    )
  }
}
