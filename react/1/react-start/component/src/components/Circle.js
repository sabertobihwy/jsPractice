import React, { Component } from 'react'
import '../css/circle.css'

export default class Circle extends Component {
    state = {
        left: this.props.left || 0,
        top: this.props.top || 0,
        xSpeed: this.props.xSpeed || 10,
        ySpeed: this.props.ySpeed || 10,
        color: this.props.color || 'green'
    }
    constructor(props){
        super(props)
        setInterval(()=>{
            let nextLeft = this.state.left + this.state.xSpeed * 16/1000 
            let nextTop = this.state.top + this.state.ySpeed * 16/1000 
            let xSpeed 
            let ySpeed 
            let color 
            if(nextLeft <= 0){
                nextLeft = 0
                xSpeed = -this.state.xSpeed 
                // color = 'lightblue'
            }else if(nextLeft >= document.documentElement.clientWidth - 100 ){
                nextLeft = document.documentElement.clientWidth - 100
                xSpeed = -this.state.xSpeed 
                // color = 'pink'
            }else if(nextTop <= 0){
                nextTop = 0
                ySpeed = -this.state.ySpeed 
                // color = 'red'
            }else if(nextTop >= document.documentElement.clientHeight - 100){
                nextTop = document.documentElement.clientHeight - 100
                ySpeed = -this.state.ySpeed 
                // color = 'grey'
            }
            this.setState({
                left: nextLeft,
                top: nextTop,
                xSpeed: xSpeed || this.state.xSpeed,
                ySpeed: ySpeed || this.state.ySpeed,
                color: color || this.state.color
            })

        },16)
    }
  render() {
    return (
      <div className="circle"  style={{
        left : this.state.left,
        top: this.state.top,
        background: this.state.color
      }} >
      </div>
    )
  }
}
