import React, { Component } from 'react'
import Tick from './Tick'

export default class TickControl extends Component {
    state = {
        isOver: false
    }
    handleOver = ()=>{
        this.setState({isOver: true})
    }
  render() {
    let text = `倒计时`
    if(this.state.isOver){
        text = `倒计时完成`
    }
    return (
      <>
        <h1>{text}</h1>
       <Tick onOver={this.handleOver} number={10} onClick={this.props.onClick}/> 
      </>
    )
  }
}
