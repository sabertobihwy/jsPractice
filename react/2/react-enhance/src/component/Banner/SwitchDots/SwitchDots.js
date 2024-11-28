import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class SwitchDots extends Component {

    static propTypes= {
        totalDots: PropTypes.number,
        handleSwitch: PropTypes.func,
        currIndex: PropTypes.number
    }

  render() {
    const dots = []
    for(let i = 0; i<this.props.totalDots; i++){
        dots.push((<span key={i} 
            className={this.props.currIndex === i ? 'dot active':'dot'}
            onClick={(e)=>{this.props.handleSwitch(i)}}
            ></span>))
    }
    return (
      <div className="dotsContainer">
        {dots}
      </div>
    )
  }
}
