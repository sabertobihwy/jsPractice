import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './imgDiv.css'

export default class ImgDiv extends Component {
    static defaultProps = {
        currIndex : 0,
        duration: 300
    } 
    static propTypes= {
        imgSrc : PropTypes.arrayOf(PropTypes.string).isRequired,
        singleWidth: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        currIndex: PropTypes.number,
        duration: PropTypes.number,
        stopTimer: PropTypes.func,
        startTimer: PropTypes.func
    }
    timer = null

    switchTo = (from, to)=>{
        if(to < 0){
            to =  this.props.imgSrc.length-1
        }else if(to > this.props.imgSrc.length-1 ){
            to = 0
        }
        clearInterval(this.timer)
        let currLeft = - from * this.props.singleWidth
        const moveDis = (to - from) * this.props.singleWidth
        const times = Math.ceil(this.props.duration / 16)
        const eachMove = moveDis / times
        let currTime = 0
        this.timer = setInterval(()=>{
            currTime++;
            currLeft -= eachMove
            this.div.style.left = currLeft + 'px'
            if(currTime === times){
                clearInterval(this.timer)
            }
        },16)
    }

    refFunc = (el)=>{
        this.div = el
    }

  render() {
    // console.log(this.props.imgSrc)
    const imgs = this.props.imgSrc.map((src,i)=>(<img key={i} src={src} alt="" style={{
        height: this.props.height,
        width: this.props.singleWidth,
        float: "left"
    }}/>))
    return (
      <div className="imgDiv" ref={this.refFunc} style={{
        height: this.props.height,
        width: this.props.singleWidth * this.props.imgSrc.length,
      }}
      onMouseEnter={()=>{this.props.stopTimer()}}
      onMouseLeave={()=>{this.props.startTimer()}}
      >
        {imgs}
      </div>
    )
  }
}
